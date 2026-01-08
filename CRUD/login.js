import mongoose from "mongoose";

const loginscheme = new mongoose.Schema({
    email: String,
    password: mongoose.Schema.Types.Mixed
})


export default mongoose.model('login',loginscheme)