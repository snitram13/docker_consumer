const mongoose  = require('mongoose');
const usersSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    sex:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }, 
    address: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('User', usersSchema)
