const express = require('express'); // importa o express (framework)

const {connectRabbitmq, consumer} = require('./rabbitmq.js'); // importa duas funcoes do arquivo rabbitmq

const User = require('./model/Users.js'); // importa o model do User do mongoose

const {connectdb}= require('./db.js'); // importa funcao de conectar com o banco de dados

(async () => {
    await connectRabbitmq() // conectado com o rabbitmq
    await connectdb() // conecta com o banco de dados
    await consumer("create_users", async (message) => {
        const mensagem = JSON.parse(message.content) //Transforma a mensagem de STRING para formato JSOM
        const user = await User.create({
            name: mensagem.name,
            sex: mensagem.sex,
            age: mensagem.age,
            address: mensagem.address,
        }) // Criar o usuario no banco de dados

        if (user) {
            console.log('user criado') // Log se a criacao do user tiver dado certo
        } else {
            console.log('erro ao criar usuario') // Log se a criacao do user deu erro
        }
    })
})()


const app = express() // Instaceia o app

app.use(express.json()) //Permite a API usar formato JSON

const port = 8901 // Define porta para a API

app.get('/', (req, res) =>{
    res.send('Hello World! porta 8901')
}) // Cria rota na / para ver se a API esta funcionando

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
}) // Iniciar a API na port definida acima e mostra log que server esta rodando