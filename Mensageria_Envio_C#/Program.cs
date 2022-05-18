using System;
using System.Text;
using Newtonsoft.Json;
using RabbitMQ.Client;

namespace Mensageria_Envio_C_
{
    class Program
    {
        static void Main(string[] args)
        {
            ConnectionFactory factory = new ConnectionFactory
            {
                HostName = "localhost"
            };

            using (var connection = factory.CreateConnection())
            {
                using (var channel = connection.CreateModel())
                {
                    channel.QueueDeclare(
                        queue: "mensagens",
                        durable: false,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null
                    );

                    // string mensagem = DateTime.Now.ToString();
                    // string mensagem = "Diogo Steinke Deconto";
                    // string mensagem = JsonConvert.SerializeObject(m);
                    
                    Mensagem m = new Mensagem
                    {
                        Id = 1,
                        Corpo = "Mensagem a partir de objeto",
                        CriadoEm = DateTime.Now
                    };

                    string mensagem = m.ToString();
                    byte[] bytes = Encoding.UTF8.GetBytes(mensagem);

                    //Enviar uma mensagem para o RabbitMQ na fila definida
                    //na propriedade routingKey
                    channel.BasicPublish(
                        body: bytes,
                        routingKey: "mensagens",
                        basicProperties: null,
                        exchange: ""
                    );

                    Console.WriteLine("Mensagem enviada!");
                    Console.ReadKey();
                }
            }
        }
    }
}
