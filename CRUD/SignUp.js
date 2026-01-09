import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: mongoose.Schema.Types.Mixed,
    novasenha: mongoose.Schema.Types.Mixed
});

export default mongoose.model('signUp', signUpSchema)