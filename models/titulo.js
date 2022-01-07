const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const Titulo = new Schema({
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
    valor: {
        type: Number,
    },
    ativo: {
        type: Boolean
    },
    createdAt: {
        allowNull: false,
        type: Date
    },
    updatedAt: {
        allowNull: false,
        type: Date
    }
})

//collection
mongoose.model("titulos", Titulo)