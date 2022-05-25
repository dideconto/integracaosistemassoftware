using System;
using System.Linq;
using System.Text;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace Mensageria_Consumo_C_
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

                    var consumer = new EventingBasicConsumer(channel);
                    consumer.Received += (model, message) =>
                    {
                        var body = message.Body.ToArray();
                        var text = Encoding.UTF8.GetString(body);
                        Console.WriteLine(text);
                    };
                    channel.BasicConsume(queue: "mensagens",
                                        autoAck: true,
                                        consumer: consumer);
                    Console.WriteLine("Fim do consumo");
                    Console.ReadLine();
                }
            }
        }
    }
}
