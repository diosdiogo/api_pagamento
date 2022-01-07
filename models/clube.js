// const db = require('./db.js')

const mongoose = require("mongoose")
const Schema = mongoose.Schema; 

var validateCNPJ = function(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
    
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
    
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
              pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
              return false;
               
        return true;

}

//const Clube = db.sequelize.define('clube',{
const Clube = new Schema({
    
    cnpj: {
        type: String,
        allowNull: false,
        trim:true,
        unique:true,
        sparse:true,
        require: 'CNPJ, é obrigatório',
        validate:[validateCNPJ, "CNPJ invalido"],
    },
    razaoSocial: {
        type: String
    },
    nomeFantasia: {
        type: String
    },
    telefonePrincipal: {
        type:String
    },
    listaTelefones: {
        type:String
    },
    cep :{
        type:String
    },
    endereco: {
        type:String
    },
    numEndereco: {
        type:String
    },
    bairro:{
        type:String
    },
    cidade: {
        type:String
    },
    uf:{
        type:String
    },
    token:{
        type:String
    },
    liberadoAte: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    deleteAt:{
        type: Date
    }
})
//collection
mongoose.model("clubes", Clube) 
