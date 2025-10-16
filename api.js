//API
import express from "express";
import cors from 'cors';

const app = express();
const PORT = 3008;

const arreyresponse = [
    {"filme":"O Mundo do ser","Ano":2025}
]

const dados = [
    {
        "Exemplo":"Este é outro exemplo JSONde ",
        "Passos":22,
        "Carro":"Mazda",
        "Modelo":"Subprime",
        "Especificações":[
            {"Luz":"verde"},
            {"Preço":144.234},
            {"Ano":2020}
        ]
    }
]
app.get("/", (req, res) => {
    res.json(dados);
});

app.listen(PORT, () => {
    console.log(`Em funcionamento no servidor ${PORT}`)
})