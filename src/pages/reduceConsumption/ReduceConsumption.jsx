import React from 'react';
import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import "./ReduceConsumption.css";

const ReduceConsumption = () => {
    const navigate = useNavigate();
    
    const handleGoToWaterScarcity = () => {
        navigate('/water-scarcity'); // Cambia esta ruta si es diferente en tu configuración
    };

    return (
        <Canvas>
            <Html
                wrapperClass='tittle-text'
                center
                distanceFactor={7}
                transform
                position={[-3, 2, 0]}
            >
                <h1>Reducir el consumo de agua doméstico.</h1>
            </Html>

            <Html
                wrapperClass='intro-reduce'
                center
                distanceFactor={5}
                transform
                position={[-0.5, 0.5, 0]}
            >
                <p>
                Reducir el consumo de agua en el hogar es esencial para combatir su escasez. Actividades cotidianas, 
                como lavar platos y ducharse, pueden generar un desperdicio significativo. Implementar prácticas simples,
                como cerrar el grifo al lavar o tomar duchas más cortas, puede marcar una gran diferencia en la conservación del agua. Estas acciones no solo preservan un recurso vital, 
                sino que también pueden reducir la factura del agua y fomentar hábitos sostenibles en la comunidad.
                </p>
            </Html>

            <Html
                wrapperClass='waterScarcity'
                center
                distanceFactor={7}
                transform
                position={[5, 3, 0]}
            >
            <button onClick={handleGoToWaterScarcity}>
                    Ir a Escasez de Agua
                </button>
            </Html>
        </Canvas>
    );
}

export default ReduceConsumption;