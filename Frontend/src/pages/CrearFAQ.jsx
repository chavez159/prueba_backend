import { useState } from "react";
import { NavBar } from "../components/Navbar";
import '../assets/formulario.css';
import { crearPregunta } from "../services/user";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
export function CrearFAQ() {
    const [titulo, setTitulo] = useState("");
    const [cuerpo, setCuerpo] = useState("");
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(titulo === "" || cuerpo === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes enviar un campo vacio',
              })
              return;
        }else{
        const object = {
            titulo: titulo,
            cuerpo: cuerpo,
            token: token
        }
        const res = await crearPregunta(object);
        if(res === 200){
            Swal.fire({
                icon: 'success',
                title: 'Bien',
                text: 'Pregunta creada',
              })
              navigate('/FAQ');
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo crear la pregunta',
                  })
            }
        }

    }

    return (
        <>
            <NavBar />
            <div className="formulario-container">
            <form onSubmit={handleSubmit} className="formulario">

                <center><h1>Crea tu pregunta</h1></center>
                    <label >
                        Titulo:
                        <textarea value={titulo} onChange={(e) => setTitulo(e.target.value)} style={{marginLeft:"4%"}}/>
                    </label>
                    <br />
                    <label >
                        Cuerpo:
                        <textarea value={cuerpo} onChange={(e) => setCuerpo(e.target.value)} style={{marginTop:"5%"}}/>
                    </label>
                    <br />

                    <button type="submit" style={{marginTop:"3%"}}>Enviar</button>
                </form>
            </div>
        </>
    )
}