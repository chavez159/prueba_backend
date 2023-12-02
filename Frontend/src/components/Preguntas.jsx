
import { FaUsers } from 'react-icons/fa';
import '../assets/noticiaCard.css'
import { useState } from 'react';
export const Pregunta = ({ title, content,id, respuestas, handleComentario }) => {
    const [comentario, setComentario] = useState("");
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
            <h4>Comentar</h4>
            <input type="text" placeholder="Escribe tu comentario" style={{width:"90%"}} onChange={(e) => {setComentario(e.target.value)}}/>
            
            <button style={{margin:"3%"}} onClick={() => handleComentario(comentario, id)}>Enviar</button>
        </div>
      </div>
    );
  };