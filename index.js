const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("API ZM Pay")
})

app.listen("3000", function(){
    console.log("SERVIDOR Rodando Porta 3000")
});