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
        private readonly ConnectionFactory _factory;
        private const string FILA = "mensagens";
        public MensageriaController(){
            _factory = new ConnectionFactory{
                HostName = "localhost"
            };
        }

        [Route("enviar")]
        [HttpPost]
        public IActionResult Enviar([FromQuery] string mensagem){
            using (var connection = _factory.CreateConnection())
            {
                using (var channel = connection.CreateModel())
                {
                    channel.QueueDeclare(
                        queue: FILA,
                        durable: false,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null
                    );

                    byte[] bytes = Encoding.UTF8.GetBytes(mensagem);

                    //Enviar uma mensagem para o RabbitMQ na fila definida
                    //na propriedade routingKey
                    channel.BasicPublish(
                        body: bytes,
                        routingKey: "mensagens",
                        basicProperties: null,
                        exchange: ""
                    );
                }
            }
            return Ok();
        }
    }
}
