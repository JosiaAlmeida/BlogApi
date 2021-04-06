
const express= require('express')
const router= express.Router()

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

module.exports= router