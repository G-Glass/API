import express from "express";
import recurso from "./server.json" with {type : "json"};

const app = express();
const PORT = 3004;

app.get('/', (req,res) => {res.json(recurso)});

app.listen(PORT, () => console.log(`Rotando no servidor ${PORT}`));
