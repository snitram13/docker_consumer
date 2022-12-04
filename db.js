const mongoose = require('mongoose');

async function connectdb(){
    mongoose.connect('mongodb+srv://snitram13:snitram13@clusterprojeto.kvh0grb.mongodb.net/?retryWrites=true&w=majority', {dbName: 'dbProjetoDocker'})
    const db = mongoose.connection
    db.on('error', err => console.error(err))
    db.once('open', function(){
        console.log("banco de dados conectado")
    })
}
module.exports ={
    connectdb
}