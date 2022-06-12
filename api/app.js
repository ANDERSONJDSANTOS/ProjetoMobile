require("dotenv").config()//importando globalmente 
const express = require("express")
const app = express()
const porta = process.env.PORTA

app.get("/", (req, res) => {
    console.log('aprendendo api')
    res.status(200).json("retornado com sucesso")
})

app.listen(porta, () => {
    console.log(`aplicação rodando na porta ${porta}`)
})