using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RabbitMQ.Client;

namespace Mensageria_Envio_API_C_.Controllers
{
    [ApiController]
    [Route("api/mensageria")]
    public class MensageriaController : ControllerBase
    {
        private readonly IConnection _connection;
        private readonly IModel _channel;
        private const string FILA = "mensagens";
        public MensageriaController()
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

        [Route("enviar")]
        [HttpPost]
        public IActionResult Enviar([FromQuery] string mensagem)
        {

            byte[] bytes = Encoding.UTF8.GetBytes(mensagem);

            //Enviar uma mensagem para o RabbitMQ na fila definida
            //na propriedade routingKey
            _channel.BasicPublish(
                body: bytes,
                routingKey: "mensagens",
                basicProperties: null,
                exchange: ""
            );
            return Ok();
        }
    }
}
