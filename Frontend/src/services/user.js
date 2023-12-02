import { link } from "./generalLink"

const BASE_URL = link

export async function login (data) {
    const response = await fetch(`${BASE_URL}api/users/login`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
              correo: data.correo,
             })
    })
    const respuesta = await response;
    return respuesta
}

export async function register (data) {
    const response = await fetch(`${BASE_URL}api/users/register`,{
        "method": "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
              nombre: data.nombre,
              usuario: data.usuario,
              correo: data.correo
             })
    })
    const respuesta = await response;
    return respuesta
}


export async function crearPregunta (data) {
    const response = await fetch(`${BASE_URL}api/faq/crearPregunta`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
              titulo: data.titulo,
              cuerpo: data.cuerpo,
             })
    })
    const respuesta = await response.status;
    return respuesta
}

export async function traerNoticias (token) {
    const response = await fetch(`${BASE_URL}api/noticias/traerTodasNoticias`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            },
    })
    const respuesta = await response;
    return respuesta
}
export async function traerPreguntas (token) {
    const response = await fetch(`${BASE_URL}api/faq/traerPreguntas`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            },
    })
    const respuesta = await response.json();
    return respuesta
}
export async function traerMisPreguntas (token) {
    const response = await fetch(`${BASE_URL}api/faq/misPreguntas`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            },
    })
    const respuesta = await response.json();
    return respuesta
}
export async function crearComentario (data) {
    const response = await fetch(`${BASE_URL}api/faq/agregarRespuesta`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
              id: data.id,
              respuesta: data.comentario,
             })
    })
    const respuesta = await response.status
    return respuesta
}
export async function eliminarMiPregunta (data) {
    const response = await fetch(`${BASE_URL}api/faq/eliminarPregunta/${data.id}`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            }
    })
    const respuesta = await response.status
    return respuesta
}
export async function verificarRol (token) {
    const response = await fetch(`${BASE_URL}api/users/revisarRol`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            }
    })
    const respuesta = await response.json()
    return respuesta
} 
export async function eliminarNoticia (data) {
    const response = await fetch(`${BASE_URL}api/noticias/eliminarNoticia/${data.id}`,{
        "method": "PATCH",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            }
    })
    const respuesta = await response.status
    return respuesta
} 

export async function crearNoticia (data) {
    const response = await fetch(`${BASE_URL}api/noticias/crearNoticia`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
              titulo: data.titulo,
              cuerpo: data.cuerpo,
              imagen: data.imagen,
              estado: 1
             })
    })
    const respuesta = await response.status
    return respuesta
}