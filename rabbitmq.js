const rabbitmq = require('amqplib')

let connection;
let channel;

async function connectRabbitmq() {
    connection = await rabbitmq.connect("amqp://rabbitmq:rabbitmq@rabbitmq_management:5672") // Conectado com o rabbitmq atraves do docker

    channel = await connection.createChannel() // cria um channel para o rabbitmq

    console.log("conectou com rabbitmq") // log que o rabbitmq esta funcionando
}

async function consumer(queue, cb) {
    channel.consume(queue, (message)=>{
        cb(message)
    },{
        noAck: true
    }) // Consome uma fila definida quando a funcao e chamada

    console.log("consumer iniciou") // log que o consumer 
}

module.exports = {connectRabbitmq, consumer} // Exporta as duas funcoes criadas acima
