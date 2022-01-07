require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? ".env.development" : ".env"
})

const express = require("express");
const bodyParse = require('body-parser')
const handlebars = require('express-handlebars')
const mongoose = require("mongoose")

const app = express()

const morgan = require('morgan')

var jwt = require('jsonwebtoken');

//configurações
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Parse
app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

//Conectado no servidor

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST).then(() => {
    useMongoClient: true
    console.log("DATABASE Conectado ")
}).catch((err) => {
    console.log("EROOR" + err)
})

//rotas
const path = require("path"); //diretório
const rotaAplicacao = require('./routers/aplicacao')
const rotaClube = require('./routers/clube')
const rotaUsuario = require('./routers/usuario')
const rotaTitulo = require('./routers/titulo')
const rotaAuth = require('./routers/auth')

//pasta de arquivos public
app.use(express.static(path.join(__dirname, "public")))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header',
        'Origin, X-Requerested, Content-Type, Accept, Authorization')

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({})
    }
    next();
});

app.use(morgan('dev'))


app.get('/app', ((req, res, next) => {
    res.render('inicio', ({ app: process.env.APP_NAME }))
}));

//rotas
app.use('/aplicacao', rotaAplicacao)
app.use('/clube', rotaClube)
app.use('/usuario', rotaUsuario)
app.use('/titulo', rotaTitulo)
app.use('/auth', rotaAuth)

app.get('/gerarToken', (req, res, next) => {
    const token = jwt.sign({
        id: 1,
    }, process.env.JWT_KEY, { expiresIn: '24h' })

    res.status(200).send({
        response: token,
    })
})
app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada')
    res.status(404)
    next(erro)
    res.render('inicio', ({ app: process.env.APP_NAME }))
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error)
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    })
})

module.exports = app