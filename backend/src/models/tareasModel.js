import mongoose from "mongoose";
 



const tareasSchema = new mongoose.Schema({
    nombre: String,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});
export const tarea = mongoose.model("Tareas", tareasSchema);