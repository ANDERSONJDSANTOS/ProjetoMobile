require("dotenv").config()//importando globalmente
const body_parser =require("body-parser") 
const express = require("express")
const conectaComBancoDeDados=require('./src/configs/mongo')
const app = express()
const porta = process.env.PORTA

app.use(body_parser.json())

app.get("/", (req, res) => {
    console.log('aprendendo api')
    res.status(200).json("retornado com sucesso")
})

async function configurarServidor(){
    try {
        
        await conectaComBancoDeDados()
        app.listen(porta, () => {
            console.log(`aplicação rodando na porta ${porta}`)
        })
        
    } catch (erro) {
        console.log(`Algo deu errado ${erro}`)
        
    }
}
configurarServidor()