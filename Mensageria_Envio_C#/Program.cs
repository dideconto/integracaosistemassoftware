using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;
using RabbitMQ.Client;

namespace Mensageria_Envio_C_
{
    class Program
    {

        static void Main(string[] args)
        {
            Console.Clear();

            ConnectionFactory factory = new ConnectionFactory
            {
                HostName = "localhost"
            };
            using (var connection = factory.CreateConnection())
            {
                string nomeFila = "mensagens";

                IModel channel1 = connection.CreateModel();
                IModel channel2 = connection.CreateModel();
                IModel channel3 = connection.CreateModel();

                BuildPublisher(channel1, nomeFila, "Produtor A", "A");
                BuildPublisher(channel2, nomeFila, "Produtor B", "B");
                BuildPublisher(channel3, nomeFila, "Produtor C", "C");

                Console.ReadKey();
            }
        }

        public static void BuildPublisher(IModel channel, string queue, string publisher, string message)
        {
            Task.Run(() =>
            {
                channel.QueueDeclare(
                    queue: "mensagens",
                    durable: true,
                    exclusive: false,
                    autoDelete: false,
                    arguments: null
                );

                while (true)
                {
                    Random r = new Random();
                    string mensagem = $"{publisher} - Enviou {message}";
                    byte[] bytes = Encoding.UTF8.GetBytes(mensagem);

                    channel.BasicPublish(
                        body: bytes,
                        routingKey: queue,
                        basicProperties: null,
                        exchange: ""
                    );

                    Console.WriteLine(mensagem);
                    Thread.Sleep(1000);
                }
            });
        }
    }
}
