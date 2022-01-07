const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Aplicacao = new Schema({
    nome: {
        type: String,
    },
    empresaReponsavel: {
        type: String
    },
    responsavel: {
        type: String
    },
    telefoneContato: {
        type: String
    },
    token: {
        type: String
    },
    liberado: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    deleteAt: {
        type: Date
    }
})

//collection
mongoose.model("aplicacao", Aplicacao)