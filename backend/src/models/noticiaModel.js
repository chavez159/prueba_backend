import mongoose from "mongoose";



const notificiaSchema = new mongoose.Schema({
    titulo: String,
    cuerpo: String,
    estado: Boolean,
    imagen: String
});
export const Noticia = mongoose.model("Noticias", notificiaSchema);