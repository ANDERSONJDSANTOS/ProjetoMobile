const mongose = require("mongoose")


module.exports =async function conectaComBancoDeDados(){
    await mongose.connect(process.env.URL_BANCO)
}

