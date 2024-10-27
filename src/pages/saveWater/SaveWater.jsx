import { Canvas } from "@react-three/fiber";
import Header from "../../component/Header";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import './SaveWater.css'

const SaveWater = () => {
    const navigate = useNavigate();
    const handleGoReduceComsumption = () => {
        navigate('/reduce-consumption'); // Cambia esta ruta si es diferente en tu configuración
    };


    return(
        <>
        <Header />
        <div className="save-water-page">
        <Canvas>
            <Html
                wrapperClass='water-save'
                center
                distanceFactor={7}
                transform
                position={[-3, 2, 0]}
            >
                <h1>Ahorrar agua al usar la Lavadora.</h1>
            </Html>
            <Html
                wrapperClass='watersave-intro'
                center
                distanceFactor={5}
                transform
                position={[-0, 0.5, 0]}
            >
                <p>Asegúrate de llenar la lavadora a su máxima capacidad antes de iniciar un ciclo. Esto maximiza el uso de agua 
                    y energía, ya que permite lavar más ropa de una vez, evitando así la necesidad de múltiples cargas. 
                    Además,selecciona el ciclo adecuado para el tipo de ropa que estás lavando,
                   utilizando configuraciones que consumen menos agua para cargas pequeñas..</p>
            </Html>
            <Html
                wrapperClass='watersave'
                center
                distanceFactor={7}
                transform
                position={[-8, 3, 0]}
            >
            <button onClick={handleGoReduceComsumption}>
                    Atras
                </button>
            </Html>
        </Canvas>
        </div>
        </>
    )
}

export default SaveWater;