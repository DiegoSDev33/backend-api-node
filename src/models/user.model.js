const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fistName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true,
        minlenght:7/* QUE O MINIMO DE CARACTERES SERA DE 7  */
    },
})

const UserModel = mongoose.model("User", userSchema );

module.exports = UserModel;