import mongoose from "mongoose";




const FAQschema = new mongoose.Schema({
    titulo: String,
    cuerpo: String,
    estado: Boolean,
    respuestas: Array,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});
export const Faq = mongoose.model("Preguntas", FAQschema);