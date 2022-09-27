const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("ROTA DE ARTIGOS");
})

router.get("/admin/new", (req, res)=>{
    res.send("ROTA PARA CRIAR UM NOVO ARTIGO!");
})

module.exports = router;