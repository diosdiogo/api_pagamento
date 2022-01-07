const express = require('express')
const router = express.Router();
const mongoose = require("mongoose")
var bcrypt = require('bcryptjs');

require('../models/usuario')

const Usuario = mongoose.model("usuarios")

router.get('/', ((req, res, next) => {
    res.status(200).send({
        mensagen: 'Lista de usuario'
    })
}))

router.get("/adm-usuarios", function(req, res) {
    Usuario.find().then((users) => {
            res.status(200).send({
                users
            })
        }).catch((err) => {
            console.log(err)
            res.status(500).send({
                ERRO: err
            })
        })
        //res.sendFile(__dirname + "/html/")
})

router.post("/salvar", (req, res) => {
    Usuario.create({
        nome: req.body.nome,
        idade: req.body.idade,
        endereco: req.body.endereco,
        numero: req.body.numero,
        CEP: req.body.cep,
        cidade: req.body.cidade,
        uf: req.body.uf,
        date: req.body.date
    }).then(() => {
        res.status(201).send({})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({
            ERRO: err
        })
    })
})

module.exports = router