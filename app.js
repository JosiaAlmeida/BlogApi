//Carregando Modulos
const express= require('express')
const handlabars= require('express-handlebars')
const bodyParser= require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

const admin= require("./routs/admin")
//const path =require('path')
//Banco de dados
const db = require('./db/data')
//Configurando Modulos
const app= express()
//Session e connect-flash
app.use(session({
    secret:"mysecretpassword",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())
//Midleware
app.use((req,res,next)=>{
    res.locals.success_msg= req.flash("success_msg")
    res.locals.error_msg= req.flash("error_msg")
    next()
})

//Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//handlebars
app.engine('handlebars', handlabars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Static
app.use(express.static("public"))

//Rotas
app.use('/',admin)
//Porta
const port = 8080
app.listen(port, ()=> console.log("Rodando na porta localhost:"+port))