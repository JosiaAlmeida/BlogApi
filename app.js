//Carregando Modulos
const express= require('express')
const handlabars= require('express-handlebars')
const bodyParser= require('body-parser')
const home= require("./routs/home")

//const mongoose= require('mongoose')
//Configurando Modulos
const app= express()
//Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//handlebars
app.engine('handlebars', handlabars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//Rotas
app.use('/',home)
//Porta
const port = 8080
app.listen(port, ()=> console.log("Rodando na porta localhost:"+port))