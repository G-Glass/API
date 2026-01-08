import mongoose from "mongoose";

//MODELO DE BANCO DE DADOS EM MONGODB

const vendaSchema = new mongoose.Schema({
    //Objecto[banco de dados]
    mes: Number,
    quantidade: Number,
    vendamensal: Number,
})

export default mongoose.model('venda',vendaSchema)