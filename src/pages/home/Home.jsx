import { Canvas } from "@react-three/fiber";
import { Earth3d } from "../../components/earth3d/Earth3d";
import { PresentationControls } from "@react-three/drei";
import useAuthStore from "../../stores/use-auth-store";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate
import "./Home.css";
import { getDocs, query, where } from "firebase/firestore";
import UserDAO from "../../daos/userDAO";
import Header from "../../component/Header";

const Home = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    const getEmail = async () => {
      const queryEmail = query(UserDAO.collectionRef, where("email", "==", user.email));
      const email = await getDocs(queryEmail);

      if (user && email.empty) {
        const newUser = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        };
        UserDAO.createUser(newUser);
      }
    };
    getEmail();
  }, [user]);

  const handlelogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleWaterScarcity = useCallback(() => {
    navigate('/water-scarcity'); // Redirigir a la página de escasez de agua
  }, [navigate]);

  return (
    <>
    <Header />
    <div className="container">
      <div className="container-left">
        <h1 className="container-left-welcome">¡Hola! {user.displayName}</h1>
        <p className="container-left-slogan">Bienvenido a innovaVerde,</p>
        <p className="container-left-slogan">"Hasta la última gota"</p>
        <button onClick={handlelogout}>Cerrar Sesión</button>
      </div>
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} intensity={5} />
        <PresentationControls enabled={true}>
          <Earth3d />
        </PresentationControls>
      </Canvas>
    </div>
    </>
  );
}

export default Home;
