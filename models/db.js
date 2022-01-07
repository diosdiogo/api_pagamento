require('dotenv').config({ 
    path: process.env.NODE_ENV === "dev" ? ".env.development" : ".env"
})
const mongoose = require("mongoose")
// const Sequelize = require('sequelize')

// //Conexao com banco de dados 
// const sequelize = new Sequelize(
//     process.env.DB_NAME, 
//     process.env.DB_USER,
//     process.env.DB_PASS,
//     {
//         host: process.env.DB_HOST,
//         dialect: process.env.DB_DIALECT
//     }
// )

// module.exports = {
//     Sequelize: Sequelize,
//     sequelize: sequelize
// }

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST).then(()=>{
    useMongoClient: true
 console.log("DATABASE Conectado ")
}).catch((err)=>{
    console.log("EROOR" + err)
})