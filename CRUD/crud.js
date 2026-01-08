import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import process from 'node:process';
import vendas from "./vendas.js";

dotenv.config();

const app = express();
const PORT = 3007;

app.use(express.json());

const conectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Conectado ao MONGODB`)
    } catch (error) {
        console.log(`Tente novamente `, error)
    };
    
}

conectDB();

//CREATE
app.post("/sell" , async(req, res) => {
    try {
        const novavenda = await vendas.create(req.body)
        res.json({novavenda})
    }catch (error) {
        res.json({error:error})
    }
})

//READ
app.get('/sell', async (req, res) => {
    try {
        const venda = await vendas.find();
        res.json({venda});
    }catch (error) {
        res.json({error : error})
    }
})

//UPDATE
app.put('/sell/:id', async (req, res ) => {
    try {
        const novasvenda = await vendas.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(novasvenda)
    }catch (error) {
        res.json(console.log(`Ocorreu um erro`, error))
    }

})


//DELETE
app.delete('/sell/:id', async (req, res) => {
    try {
        const deletevenda = await vendas.findByIdAndDelete(
            req.params.id,
        );
        res.json(deletevenda);
    }catch (error) {
        res.json(console.log(`Falha no servidor `, error))
    }
})


app.listen(PORT, () => console.log(`Rotando no Localhost:${PORT}`))