const express = require('express')
const router = express.Router();
const mongoose = require("mongoose")
const authetication = require('../middleware/authentication')

require('../models/titulo')
const Titulo = mongoose.model("titulos")

router.get('/', ((req, res, next) => {
    res.status(200).send({
        mensagen: 'Lista de titulos'
    })
}))

router.get('/listar', authetication, ((req, res, next) => {
    Titulo.find().then((titulo) => {
        res.status(200).send({
            response: titulo
        })
    }).catch((erro) => {
        res.status(500).send({
            error: erro,
            response: null
        })
    })
}))

router.get('/buscarById', authetication, ((req, res, next) => {
    Titulo.findOne({
        where: {
            id: req.body.id
        }
    }).then((titulo) => {
        res.status(200).send({
            response: titulo
        })
    }).catch((erro) => {
        res.status(500).send({
            error: erro,
            response: null
        })
    })
}))

router.post("/gravar", ((req, res, next) => {

    var data = req.body;
    console.log(data);

    new Titulo({
        nome: req.body.nome,
        valor: req.body.valor,
        ativo: true,
        createdAt: new Date().setDate(new Date().getDate() - 30),
    }).save().then(function() {
        res.status(201).send({
            mensagen: 'SUCCESS'
        })
    }).catch(function(erro) {
        console.log(erro)
        res.status(500).send({
            error: erro,
            response: null
        })
    })
}))

module.exports = router