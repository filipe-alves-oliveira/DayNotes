//express -- framework de servidor, vai fazer executar o backend, ouvir a porta que o client vai fazer conexáo,vai fazer api funcionar 
//camada de frontEnd com o back funciona da maneira a baixo, qdo entra em uma rota ele faz um get e damos a resposta. 

const express = require('express'); //require = import do node 
const app = express();

require 

app.use(express.json()); //recurso q vai utilizar json nas requisiçoes.


app.get('/', (request, response) => {
    return response.json({
        nome: "Filipe alves",
        profissao: "ADS",
    });
})

app.listen(3333);