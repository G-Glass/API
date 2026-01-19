import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv'
import SignUp from "./SignUp.js";

dotenv.config();

const PORT = 3002;
const app = express();

app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Conectado ao MongoDB`)
    }catch (error) {
        console.log(`Falha ao conectar ao MongoDB`,error)
    }
}
connectDB();

app.post('/signUp', async (req, res) => {
    try {
        const novousuario = await SignUp.create(req.body)
        res.json({novousuario})
    } catch (erro) {
        res.json({error:error})
    }
})

app.get('/signUp', async (req, res) => {
    try {
        const usuarios = await SignUp.find();
        res.json({usuarios});
    }catch (error) {
        res.json(console.log(`O programa deu erro,tente novamente`));
    };
});

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));