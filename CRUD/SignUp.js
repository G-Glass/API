import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },

    senha: {
        type:String,
        required:true,

        validate: {
            validator: function (v) {
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(v);
            },
            message: `A senha não coicite`
        }
    }




    /*nome: String,
    email: String,
    senha: mongoose.Schema.Types.Mixed,
    conf_senha: mongoose.Schema.Types.Mixed
    */
});

export default mongoose.model('signUp', signUpSchema)