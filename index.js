const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

//view engine
app.set('view engine', 'ejs');

//static
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

//database
connection.authenticate().then(()=>{
    console.log("Conexão feita com o banco de dados!");
}).catch((error)=>{
    console.log(error);
})

app.get("/", (req, res)=>{
    res.render("index")
})

app.listen(3000, (e)=>{
    if(e){
        console.log("houve um erro");
    }else{
        console.log("O servidor está rodando");
    }
})