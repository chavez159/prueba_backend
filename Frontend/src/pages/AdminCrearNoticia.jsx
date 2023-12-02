import { useState } from "react";
import { useNavigate } from "react-router";
import { NavBar } from "../components/Navbar";
import { crearNoticia } from "../services/user";
import Swal from "sweetalert2";

export function CrearNoticia(){
    const [titulo, setTitulo] = useState('');
    const [cuerpo, setCuerpo] = useState('');
    const [imagen, setImagen] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(titulo === "" || cuerpo === "" || imagen === ""){
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
            imagen: imagen,
            token: token
        }
        const res = await crearNoticia(object);
        if(res === 200){
            Swal.fire({
                icon: 'success',
                title: 'Bien',
                text: 'Noticia creada',
              })
              navigate('/');
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo crear la noticia',
                  })
            }
        }

    }
    return(
        <>
        <NavBar />
        <div className="formulario-container">
        <form onSubmit={handleSubmit} className="formulario">

            <center><h1>Crea tu noticia</h1></center>
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
                <label >
                    Imagen:
                    <textarea value={imagen} onChange={(e) => setImagen(e.target.value)} style={{marginTop:"5%"}}/>
                </label>
                <br />


                <button type="submit" style={{marginTop:"3%"}}>Enviar</button>
            </form>
        </div>
    </>
    )
}