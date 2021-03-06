const mongoose = require("mongoose")

const Schema = mongoose.Schema; 

const Usuario = new Schema({
    id: {
        type: Schema.ObjectId,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    nome: {
        type: String,
        require: true
    },
    idade: {
        type: Number
    },
    endereco: {
        type: String,
    },
    numero: {
        type: String
    },
    CEP : {
        type: String,
    },
    cidade: {
        type: String,
    },
    uf:{
        type: String
    },
    liberadoAte: {
        type:Date
    },
    createdAt: {
        allowNull: false,
        type: Date
    },
    updatedAt: {
        allowNull: false,
        type: Date
    },
    deleteAt:{
        type: Date
    }
})

//collection
mongoose.model("usuarios", Usuario) 