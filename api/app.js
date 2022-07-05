require("dotenv").config();

const cors = require('cors')

const connectWithDb = require('./src/configs/mongo');
const bodyParse = require("body-parser"); 

const routes = require('./routes');
const express = require("express");

const app = express();

app.use(cors({
  origin:'http://localhost:19006',
  credentials:true
}));
app.use(bodyParse.json());
app.use(routes);

app.use((err, req, res, next) => {
  console.log(err.stack);
  const message = 'Um erro ocorreu, estamos trabalhando para resolver';
  res.status(500).json(message);
});

async function configServer(){
  try {
    const porta = process.env.PORT;
    await connectWithDb();
    app.listen(porta, () => console.log(`aplicação rodando na porta ${porta}`));  
  } 
  catch (erro) {
    console.log(`Algo deu errado ${erro}`)
  }
}

configServer();