import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaterScarcity.css';
import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const WaterScarcity = () => {
    const navigate = useNavigate();

    const handleNavigation = useCallback((path) => {
        navigate(path);
    }, [navigate]);

    const buttons = [
        { label: 'Volver al Inicio', onClick: () => handleNavigation('/home'), position: [6, 3, 0] },
        { label: 'Reducir el Consumo del Agua', onClick: () => handleNavigation('/reduce-consumption'), position: [4, -1.2, 0] },
        { label: 'Ahorro de Agua al Usar la Lavadora', onClick: () => handleNavigation('/water-savings'), position: [4, -2.2, 0] },
        { label: 'Gráficos Interactivos', onClick: () => handleNavigation('/interactive-chars'), position: [4, -3.2, 0] },
    ];

    return (
        <div className='water-scarcity-page'>
            <Canvas>
                <Html wrapperClass='water-text' center distanceFactor={9} transform position={[-5, 2, 0]}>
                    <h1>Escasez de Agua.</h1>
                </Html>
                <Html wrapperClass='intro-water' center distanceFactor={5} transform position={[0, 0.5, 0]}>
                    <p>
                        La escasez de agua se debe al aumento de la demanda y la reducción de los recursos disponibles,
                        causada por factores como el cambio climático y la contaminación. Esto afecta la salud, la agricultura
                        y la economía, por lo que es esencial mejorar su gestión.
                    </p>
                </Html>
                <Html wrapperClass='practical-tips' center distanceFactor={7} transform position={[4, -0.5, 0]}>
                    <p>Consejos prácticos:</p>
                </Html>
                {buttons.map((button, index) => (
                    <Html
                        key={index}
                        distanceFactor={7}
                        center
                        transform
                        position={button.position}
                    >
                        <button
                            className={button.label.includes('Volver') ? 'back-to-quiz-button' : button.label.includes('Reducir') ? 'reduce-comsumption' : button.label.includes('Ahorro') ? 'water-savings' : 'interactice-chars'}
                            onClick={button.onClick}
                           
                        >
                            {button.label}
                        </button>
                    </Html>
                ))}
            </Canvas>
        </div>
    );
};

export default WaterScarcity;