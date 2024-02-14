const express = require('express');
const cors = require('cors');
const GET = require('./controllers/get');
const POST = require('./controllers/post');

const app = express();

app.use(cors())

app.use(express.json());

app.use('/', GET);

app.use('/', POST);


app.listen(process.env.PORT || 8080, ()=>{
    console.log('Servidor rodando em http:/localhost:8080/');
})