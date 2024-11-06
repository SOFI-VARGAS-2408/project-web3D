import { Canvas } from "@react-three/fiber"
import Button from "../../components/Button/Button"
import ButtonLogOut from "../../components/ButtonLogOut/ButtonLogOut"
import "./Start.css"
import { Trash } from "../../components/Trash/Trash"
import { OrbitControls } from "@react-three/drei"
const Start = () =>{
    return (
        <>
        <ButtonLogOut />
        <div className="container">
          <div className="container-options">
            <div className="container-options-option">
              <Canvas>
                <ambientLight />
                <directionalLight position={[10, 10, 10]} intensity={10} />
                <Trash position={[-1.5,0,0]} scale={0.8 } rotation={[0,2,0]}/>
              </Canvas>
              <Button text={"Contaminacion"}/>
            </div>
            <div className="container-options-option">
              <Button text={"Escasez"}/>
            </div>
            <div className="container-options-option">
              <Button text={"Acidificacion"}/>
            </div>
            <div className="container-options-option">
              <Button text={"Test"}/>
            </div>
          </div>
        </div>
      </> 
    )

}

export default Start