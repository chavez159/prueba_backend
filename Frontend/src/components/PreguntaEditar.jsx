
import { FaUsers } from 'react-icons/fa';
import '../assets/noticiaCard.css'
import { useEffect, useState } from 'react';
export const PreguntaEditar = ({ title, content,id, respuestas, handleComentario, enviarEliminar }) => {
    const [comentario, setComentario] = useState("");
    const [titleEditar, setTitle] = useState("");
    const [contentEditar, setContent] = useState("");


    return (
      <div className="card">
       
        <div className="card-content">
        <h3 className="card-title">{title}</h3>
          <p>{content}</p>
            <p>Respuestas:</p>
            {respuestas.map((respuesta) => {
                return (
                    <p>{<FaUsers/>}- {respuesta}</p>
                )
            })}
           
            <button style={{margin:"3%", backgroundColor:"red"}} onClick={() => enviarEliminar(id)}>Eliminar</button>
        </div>
      </div>
    );
  };