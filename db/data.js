const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/blogapp")
.then(()=> console.log("Conectado com sucesso"))
.catch((err)=> console.log("Falha na conexão com o banco de dados: "+err))