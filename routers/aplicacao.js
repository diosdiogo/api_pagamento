const express = require('express')
const router = express.Router();
var md5 = require('md5');
const mongoose = require("mongoose")
const authetication = require('../middleware/authentication')

require('../models/aplicacao')
const Apl = mongoose.model("aplicacao")

router.get('/', ((req, res, next) => {
    res.status(200).send({
        mensagen: 'Lista de aplicativos'
    })
}))

router.get('/listar', ((req, res, next) => {
    Apl.find().then((app) => {
        res.status(200).send({
            response: app
        })
    }).catch((erro) => {
        res.status(500).send({
            error: erro,
            response: null
        })
    })
}))

router.get('/buscarById', authetication, ((req, res, next) => {
    Apl.findOne({
        where: {
            id: req.body.id
        }
    }).then((empresa) => {
        res.status(200).send({
            response: empresa
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
    var token = md5(data)

    new Apl({
        nome: data.nome,
        empresaReponsavel: data.empresaReponsavel,
        responsavel: data.responsavel,
        telefoneContato: data.telefoneContato,
        token: token,
        createdAt: new Date().setDate(new Date().getDate() - 30),
        updatedAt: new Date().setDate(new Date().getDate() - 30)
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