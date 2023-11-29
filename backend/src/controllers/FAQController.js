
import { Faq } from "../models/FAQModel.js"
import { Noticia } from "../models/noticiaModel.js"
import { tarea } from "../models/tareasModel.js"
import { Usuario } from "../models/usuariosModel.js"
import Jwt from 'jsonwebtoken';

export const crearPregunta = async (req, res) => {
    const {titulo, cuerpo, estado} = req.body
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
    const decoded = Jwt.verify(token, 'palabraSecreta')
    try {
        const usuario = await Usuario.findOne({_id: decoded.usuario[0]._id})
        console.log(usuario)
        const pregunta = new Faq({
            titulo: titulo,
            cuerpo: cuerpo,
            estado: estado,
            respuestas: [],
            usuario: usuario
            
        })
        pregunta.save()
        res.status(200).json({message: "ok"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}

export const traerTodasPreguntas = async (req, res) => {
    try {
        const preguntas = await Faq.find({})
        res.status(200).json(preguntas)
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}

export const agregarRespuesta = async (req, res) => {
    try {
        const pregunta = await Faq.findOne({_id: req.body.id})
        pregunta.respuestas.push(req.body.respuesta)
        pregunta.save()
        res.status(200).json({message: "ok"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}

export const misPreguntas = async (req, res) => {
    const {titulo, cuerpo, estado} = req.body
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
    const decoded = Jwt.verify(token, 'palabraSecreta')
    try {
        const usuario = await Usuario.findOne({_id: decoded.usuario[0]._id})
        const preguntas = await Faq.find({usuario: usuario})
        res.status(200).json(preguntas)

    }catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}
export const eliminarPregunta = async (req, res) => {
    const id = req.params.id
   
    try {
        await Faq.findOneAndDelete({_id: id})
        res.status(200).json({message: "ok"})

    }catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}
