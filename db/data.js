const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/blogapp",{
    useFindAndModify: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Conectado com sucesso a database"))
.catch((err)=> console.log("Falha na conexão com o banco de dados: "+err))