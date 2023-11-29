
import { Noticia } from "../models/noticiaModel.js"
import { tarea } from "../models/tareasModel.js"
import { Usuario } from "../models/usuariosModel.js"
import Jwt from 'jsonwebtoken';

export const crearNoticia = async (req, res) => {
    const {titulo, cuerpo, estado, fecha, imagen} = req.body
    try {
        const noticia = new Noticia({
            titulo: titulo,
            cuerpo: cuerpo,
            estado: estado,
            imagen: imagen
        })
        noticia.save()
        res.status(200).json({message: "ok"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}

export const traerTodasNoticias = async (req, res) => {
    try {
        const noticias = await Noticia.find({estado: true})
        res.status(200).json(noticias)
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}
export const editarNoticia = async (req, res) => {
    try {
        const notifica = await Noticia.findOne({_id: req.params.id})
        notifica.titulo = req.body.titulo
        notifica.cuerpo = req.body.cuerpo
        notifica.estado = req.body.estado
        notifica.imagen = req.body.imagen
        notifica.save()
        res.status(200).json({message: "ok"})
    }
    catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}
        
export const eliminarNoticia = async (req, res) => {
    try {
        const noticia = await Noticia.findOne({_id: req.params.id})
        noticia.estado = false
        noticia.save()
        res.status(200).json({message: "ok"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}