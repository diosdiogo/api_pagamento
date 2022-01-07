const mongoose = require("mongoose")
require('../models/aplicacao')
const Apl = mongoose.model("aplicacao")

module.exports = (req, res, next) => {
    const token = req.headers.authorization.replace("Bearer ", "")
    console.log(token)
    Apl.findOne({
        token: token
    }).then((apl) => {
        console.log(apl)
        if (apl !== null) {
            next();
        } else {
            return res.status(401).send({
                mensagem: "Token Invalido"
            })
        }

    }).catch((erro) => {

    })
}