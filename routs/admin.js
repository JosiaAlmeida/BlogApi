
const express= require('express')
const router= express.Router()
const mongoose = require("mongoose")
//importando model
require("../model/Categoria")
const categoria= mongoose.model("categoria")

router.get('/',(req,res)=>{
    res.render("admin/index")
})
router.get('/posts',(req,res)=>{
    res.send("Pagina de post")
})
router.get('/categorias',(req,res)=>{
    res.render("admin/categoria")
})
router.get("/addcategorias",(req,res)=>res.render("admin/addcategoria"))

router.post("/newCategoria", (req, res)=>{
    //Criando model
    const newCategoria= {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new categoria(newCategoria).save()
    .then(()=> res.render('admin/categoria'))
    .catch((err)=> res.send("Falha "+err))
})

module.exports= router