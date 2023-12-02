import { GoogleLogin } from '@react-oauth/google';
import '../assets/styles.css';
import { jwtDecode } from 'jwt-decode';
import { login, register } from '../services/user';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
export function Registro() {

    const navigate = useNavigate();
    const handleLogin = async (data) => {
        console.log(data)
        const object = {
            correo: data.email,
            nombre: data.give_name,
            usuario: data.name

        }
        const response = await register(object);
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                text: 'Registro correcto!',
              })
              navigate('/login');
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo registrar este usuario',
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
                    <h1>registrarse</h1>
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            handleLogin(jwtDecode(credentialResponse.credential));
                        }}
                        text={'continue_with'}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_policy"}
                        className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
                    />
                    <a href="/login" style={{marginTop:"10px"}}>Iniciar sesion</a>
                </div>
            </div>
        </>
    )
}