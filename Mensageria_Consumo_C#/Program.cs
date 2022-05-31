using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace Mensageria_Consumo_C_
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
                using (var channel = connection.CreateModel())
                {
                    channel.QueueDeclare(
                        queue: "mensagens",
                        durable: true,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null
                    );

                    BuildAndRunWorker(channel, "Consumidor A:");
                    BuildAndRunWorker(channel, "Consumidor B:");

                    Console.ReadKey();

                }
            }
        }

        public static void BuildAndRunWorker(IModel channel, string consumerName)
        {
            Task.Run(() =>
            {
                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, message) =>
                {
                    var body = message.Body.ToArray();
                    var text = Encoding.UTF8.GetString(body);
                    Console.WriteLine($"{consumerName} {text}");
                };
                channel.BasicConsume(queue: "mensagens",
                                    autoAck: true,
                                    consumer: consumer);
                Console.ReadLine();
            });
        }
    }
}
