import { NavBar } from "../components/Navbar";
import '../assets/home.css';
import { Pregunta } from "../components/Preguntas";
import { useEffect, useState } from "react";
import { crearComentario, eliminarMiPregunta, traerMisPreguntas, traerPreguntas } from "../services/user";
import Swal from "sweetalert2";
import Modal from "react-responsive-modal";
import { useNavigate } from "react-router";
import { PreguntaEditar } from "../components/PreguntaEditar";

export function MisFAQ() {
    const [preguntas, setPreguntas] = useState([]);
    const token = localStorage.getItem('token');
    const [reload, setReload] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const getPreguntas = async () => {
            const data = await traerMisPreguntas(token);
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
    const eliminarPregunta = async ( id) => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No podras revertir esta accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',

            confirmButtonText: 'Si, eliminar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                    const object = {
                        id: id,
                        token: token
                    }
                    const res = await eliminarMiPregunta(object);
                    console.log(res);
                    if (res === 200) {
                        Swal.fire(
                            'Eliminado',
                            'La pregunta fue eliminada',
                            'success'
                        )
                        setReload(!reload);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'No se pudo eliminar la pregunta',
                        })
                    }
                }});
            }
    
    return (
        <>
            <NavBar />

            <div>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ margin: '10px 10px' }} onClick={() => { navigate('/crearFAQ') }}>Crear una pregunta</button>
                    
                </div>


                <center><h1>Mis preguntas</h1></center>
                <div className="noticias">
                    {preguntas.map((noticia) => {
                        return (
                            <PreguntaEditar
                                title={noticia.titulo}
                                content={noticia.cuerpo}
                                respuestas={noticia.respuestas}
                                id={noticia._id}
                                handleComentario={recibirComentario}
                                enviarEliminar={eliminarPregunta}
                            />
                        )
                    })}
                </div>
            </div>


        </>

    )
}