import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const PORT = 3009;

app.use(express.json());

const conectDB = async() => {
    try {
        await mongoose.connect(Process.env.MONGO_URL);
        console.log(`Conectado ao MONGODB`)
    } catch (error) {
        console.log(`Tente novamente `, error)
    };
    
}

conectDB();

app.get("/" ,(req, res) => {

})

app.listen(PORT, () => console.log(`Rotando no Localhost:${PORT}`))