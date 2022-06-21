using System;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace Mensageria_Envio_API_C_.Services
{
    public class ConsumoMensagemService : BackgroundService
    {
        private readonly IConnection _connection;
        private readonly IModel _channel;
        private const string FILA = "mensagens";
        public ConsumoMensagemService()
        {
            ConnectionFactory factory = new ConnectionFactory
            {
                HostName = "localhost"
            };
            _connection = factory.CreateConnection();
            _channel = _connection.CreateModel();
            _channel.QueueDeclare(queue: FILA,
                                 durable: false,
                                 exclusive: false,
                                 autoDelete: false,
                                 arguments: null);

        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var consumer = new EventingBasicConsumer(_channel);
            consumer.Received += (model, message) =>
            {
                var body = message.Body.ToArray();
                var text = Encoding.UTF8.GetString(body);
                Console.WriteLine($"{text}");
            };
            _channel.BasicConsume(queue: FILA,
                                autoAck: true,
                                consumer: consumer);
            return Task.CompletedTask;
        }
    }
}