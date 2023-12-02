import { NavBar } from "../components/Navbar";
import '../assets/calculadora.css';
import { useState } from "react";
import Swal from "sweetalert2";
export function Calculadora() {
    const [lenght, setLenght] = useState(1);
    const [notas, setNotas] = useState([]);
    const [porcentajes, setPorcentajes] = useState([]);
    const [resultado, setResultado] = useState(0);
    const handleNota = (position, value) => {
        const newNotas = [...notas];
        console.log(position);
        console.log(newNotas);
        newNotas[position] = value;
        setNotas(newNotas);
    }

    const handlePorcentaje = (position, value) => {
        const newPorcentajes = [...porcentajes];
        console.log(newPorcentajes);
        newPorcentajes[position] = value;
        setPorcentajes(newPorcentajes);
    }

    const calcular = () => {
        const lenghtNotas = notas.length;
        const lenghtPorcentajes = porcentajes.length;
        let sumatoriaPorcentajes = 0;
        for (let i = 0; i < lenghtPorcentajes; i++) {
            sumatoriaPorcentajes += parseInt(porcentajes[i]);
        }
        if (sumatoriaPorcentajes !== 100) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La sumatoria de los porcentajes debe ser 100',
            })
        } else {
            if (lenghtNotas !== lenghtPorcentajes) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debes llenar todos los campos',
                })
            } else if (lenghtNotas === 0 || lenghtPorcentajes === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debes llenar todos los campos',
                })
            }
            else {
                let resultado = 0;
                for (let i = 0; i < lenghtNotas; i++) {
                    resultado += notas[i] * porcentajes[i] / 100;
                }
                const resultadoFinal = resultado.toFixed(2);
                console.log(resultadoFinal);
                //document.getElementById("resultado").innerHTML = resultadoFinal;
                Swal.fire({
                    icon: 'success',
                    title: 'Tu nota final es',
                    text: resultadoFinal,
                })

            }
        }
    }
    const borrar = () => {
        setLenght(1);
        setNotas([]);
        setPorcentajes([]);
        document.getElementById("resultado").innerHTML = "";
    }
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 style={{marginTop:"55px"}}>Calculadora</h1>
                <h3>Calcula tu nota final</h3>
                {Array(lenght).fill(0).map((number, index) => (

                    <div className="inputs">

                        <input className="first"
                            type="text"
                            id="evaluacion"
                            placeholder="Evaluación"

                        />
                        <input
                            type="number"
                            id="nota"
                            min={0}
                            max={10}
                            placeholder="Nota"
                            onChange={(e) => handleNota(index, e.target.value)}
                        />
                        <input className="last"
                            type="number"
                            id="porcentaje"
                            min={0}
                            max={100}
                            placeholder="Porcentaje"
                            onChange={(e) => handlePorcentaje(index, e.target.value)}
                        />
                    </div>
                ))}
                <div className="buttons">
                    <button onClick={calcular}>Calcular</button>
                    <button onClick={() => { setLenght(lenght + 1) }}>+</button>
                    <button onClick={borrar}>Borrar todo</button>
                </div>
                <div className="output">
                    <p id="resultado"></p>
                </div>
            </div>
        </>
    )
}