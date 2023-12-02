import { useEffect, useState } from "react";
import { NavBar } from "../components/Navbar";
import { eliminarNoticia, traerNoticias } from "../services/user";
import { Noticias } from "../components/Noticia";
import { NoticiasEliminar } from "../components/NoticiasEliminar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export function AdminPregunta(){
    const [noticias, setNoticias] = useState([]);
    const [recharge, setRecharge] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        const getNoticias = async () => {
            const response = await traerNoticias(token);
            const data = await response.json();
            console.log(data);
            if(response.status === 400){
                localStorage.clear();
                window.location.href = '/login';
            }else{

            
            setNoticias(data);
            }
        }
        getNoticias();
       
    }, [recharge]);
    const receiveEliminar = async(id) => {
        const object = {
            id: id,
            token: token
        }   
        const res = await eliminarNoticia(object);
        if(res === 200){
            Swal.fire({
                icon: 'success',
                title: 'Noticia eliminada',
                showConfirmButton: false,
                timer: 1500
              })
                setRecharge(!recharge);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar la noticia',
                showConfirmButton: false,
                timer: 1500
              })
        }
        }
    return(
        <>
        <NavBar/>
        <div>
        <div style={{ textAlign: 'center' }}>
           <h1>Control de noticias</h1> 
                <button onClick={() => {navigate('/crearNoticia')}}>Crear noticia</button>
                </div>
            <div className="noticias">

                {noticias.map((noticia) => {
                    return (
                       <NoticiasEliminar
                       
                        title={noticia.titulo}
                        content={noticia.cuerpo}
                        imageUrl={noticia.imagen}
                        id={noticia._id}
                        handleEliminar={receiveEliminar}
                       />
                    )
                })}
            </div>
        </div>
        </>
    );
}