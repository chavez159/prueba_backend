import { GoogleLogin } from '@react-oauth/google';
import '../assets/styles.css';
import { jwtDecode } from 'jwt-decode';
import { login } from '../services/user';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import '../assets/login.css'; 

export function Login() {
    const navigate = useNavigate();
    const handleLogin = async (data) => {
        const object = {
            correo: data.email
        }
        const response = await login(object);
        if (response.status === 200) {
            const token = await response.json();
            console.log(token.token);
            localStorage.setItem('token', token.token);
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                text: 'Iniciaste sesión correctamente',
              })
              navigate('/');
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo iniciar sesión',
              })
        }
    }

    const onFailure = () => {
        console.log("SALIO MAL :C");
    };

    return (
        <>
            <div className='loginContainer'>
                <div className="image-section">
                    <img src="https://cdn-pro.elsalvador.com/wp-content/uploads/2017/01/25195159/1434724798880.jpg" alt="Imagen" />
                </div>
                <div className="login-form">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo_UCA_2015.jpg/270px-Logo_UCA_2015.jpg" alt="Imagen" className='logo' />
                    <h1>Iniciar sesion</h1>
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            handleLogin(jwtDecode(credentialResponse.credential));
                        }}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_policy"}
                        className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
                    />
                    <a href="/register" style={{marginTop:"10px"}}>Registrarse</a>
                </div>
            </div>
        </>
    )
}