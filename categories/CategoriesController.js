const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("ROTA DE CATEGORIAS");
})

router.get("/admin/new", (req, res)=>{
    res.send("ROTA PARA CRIAR UMANOVA CATEGORIA!");
})

module.exports = router;