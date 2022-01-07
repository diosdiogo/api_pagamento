const express = require('express')
const router = express.Router();
var md5 = require('md5');
const mongoose = require("mongoose")
const authetication = require('../middleware/authentication')
const valida = require('../middleware/valida')

require('../models/clube')
const Clube = mongoose.model("clubes")


router.get('/', ((req, res, next) => {
    res.status(200).send({
        mensagen: 'Lista de empresa'
    })
}))

router.get('/listar', valida, ((req, res, next) => {
    Clube.find().then((empresa) => {
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

router.get('/buscarByToken', valida, ((req, res, next) => {
    Clube.findOne({
        token: req.body.token
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

router.get('/buscarById', valida, ((req, res, next) => {
    Clube.findOne({
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

router.post('/deletar', ((req, res, next) => {
    Clube.destroy({ where: { id: req.params.id } })
        //Clube.update({ deleteAt: new Date().setDate(new Date().getDate() - 30) }, { where: { _id: req.params.id } }).then((empresa) => {
        .then(() => {
            res.status(200).send({
                response: 0
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

    var token = md5(data.cnpj)
    new Clube({
        cnpj: data.cnpj,
        razaoSocial: data.razaoSocial,
        nomeFantasia: data.nomeFantasia,
        telefonePrincipal: data.telefonePrincipal,
        cep: data.cep,
        endereco: data.endereco,
        numEndereco: data.numEndereco,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        token: token,
        liberadoAte: new Date().setDate(new Date().getDate() - 30),
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