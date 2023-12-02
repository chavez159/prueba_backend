import { NavBar } from "../components/Navbar";
import '../assets/home.css';
import { useEffect, useState } from "react";
import { traerNoticias } from "../services/user";
import { Noticias } from "../components/Noticia";
export function Home() {
    const [noticias, setNoticias] = useState([]);
    const token = localStorage.getItem('token');
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
      
    }, []);
    return (
        <div>
            <NavBar />
                <center><h3 >Noticias</h3></center>
            <div className="noticias">
                {noticias.map((noticia) => {
                    return (
                       <Noticias
                       title={noticia.titulo}
                          content={noticia.cuerpo}
                            imageUrl={noticia.imagen}
                       />
                    )
                })}
            </div>
        </div>
    )
}