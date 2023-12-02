import { NavBar } from "../components/Navbar";
import '../assets/home.css';
import { Pregunta } from "../components/Preguntas";
import { useEffect, useState } from "react";
import { crearComentario, traerPreguntas } from "../services/user";
import Swal from "sweetalert2";
import Modal from "react-responsive-modal";
import { useNavigate } from "react-router";

export function FAQ() {
    const [preguntas, setPreguntas] = useState([]);
    const token = localStorage.getItem('token');
    const [reload, setReload] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const getPreguntas = async () => {
            const data = await traerPreguntas(token);
            console.log(data);
            setPreguntas(data);
        }
        getPreguntas();
    }, [reload]);

    const recibirComentario = async (comentario, id) => {
        if (comentario !== "") {
            const object = {
                id: id,
                comentario: comentario,
                token: token
            }
            const res = await crearComentario(object);
            if (res === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Bien',
                    text: 'Comentario agregado',
                })
                setReload(!reload);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo agregar el comentario',
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes enviar un comentario vacio',
            })

        }
    }
    return (
        <>
            <NavBar />

            <div>
                <div className="botons">
                    <button style={{ margin: '10px 10px' }} onClick={() => { navigate('/crearFAQ') }}>Crear una pregunta</button>
                    <button style={{ margin: '10px 10px', backgroundColor:'green' }} onClick={() => { navigate('/misFAQ') }}>Mis preguntas</button>
                    
                </div>


                <center><h1>Foro de preguntas y respuestas</h1></center>
                <div className="noticias">
                    {preguntas.map((noticia) => {
                        return (
                            <Pregunta
                                title={noticia.titulo}
                                content={noticia.cuerpo}
                                respuestas={noticia.respuestas}
                                id={noticia._id}
                                handleComentario={recibirComentario}
                            />
                        )
                    })}
                </div>
            </div>


        </>

    )
}