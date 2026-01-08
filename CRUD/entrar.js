import mongoose from "mongoose";
import login from "./login.js";
import express from "express";
import dotenv from 'dotenv'


dotenv.config();

const app = express();
const PORT = 3004;

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

app.listen(PORT, () => console.log(`Iniciando no servidor ${PORT}`))

