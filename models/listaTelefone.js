const mongoose = require("mongoose")

const Schema = mongoose.Schema; 

const ListaTelefone = new Schema({
    _id: {
        type:  UniqueId,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    clube:{
        type: String
    },
    telefone:{
        type: String
    },
    tipoContato: {
        type: String
    },
    contato:{
        type: String
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
        allowNull: false,
        type: Date
    }
})

//collection
mongoose.model("listaTelefone", ListaTelefone) 