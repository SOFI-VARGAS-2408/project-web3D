import { useGLTF } from '@react-three/drei'

export function House3D(props) {
  const { nodes, materials } = useGLTF('/models-3d/house.glb')
  return (
    <group {...props} dispose={null} castShadow>
      <group position={[-2.804, -2.516, 1.813]} scale={[9.384, 1.016, 9.384]} receiveShadow>
        <mesh geometry={nodes.Cubo044_1.geometry} material={materials.SUB} />
        <mesh geometry={nodes.Cubo044_2.geometry} material={materials.Verde} castShadow
          receiveShadow/>
      </group>
      <mesh
        geometry={nodes.Cubo049.geometry}
        material={materials.CESPED}
        position={[-3.993, -0.71, -3.11]}
        scale={0.848}
      />
      <mesh
        geometry={nodes.Cubo050.geometry}
        material={materials.CESPED}
        position={[-4.208, -0.925, -4.41]}
        scale={0.577}
      />
      <mesh
        geometry={nodes.Cubo051.geometry}
        material={materials.CESPED}
        position={[-2.991, -1.046, -2.782]}
        scale={0.482}
      />
      <mesh
        geometry={nodes.Cubo053.geometry}
        material={materials.ROCA}
        position={[6.693, -2.44, -8.301]}
        rotation={[-Math.PI, 1.292, -Math.PI]}
        scale={[0.575, 0.488, 0.575]}
      />
      <mesh
        geometry={nodes.Sea.geometry}
        material={materials['Material.001']}
        position={[-1.088, -2.54, -0.485]}
        rotation={[0, 0.454, 0]}
        scale={[1.127, 0.921, 0.921]}
      />
      <mesh
        geometry={nodes.PAREDES.geometry}
        material={materials.pared}
        position={[-1.343, -0.473, 0.153]}
        rotation={[-0.324, 0.017, -Math.PI / 10]}
        scale={[2.195, 1.749, 2.188]}
      />
      <mesh
        geometry={nodes.Cubo001.geometry}
        material={materials.madera}
        position={[0.79, 1.485, 0.798]}
        rotation={[0.012, -0.01, 0]}
        scale={[0.472, 0.6, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo002.geometry}
        material={materials.madera}
        position={[0.703, -0.302, -1.766]}
        rotation={[-0.133, -0.01, -0.139]}
        scale={[0.387, 2.698, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo003.geometry}
        material={materials.madera}
        position={[0.618, -0.287, 3.361]}
        rotation={[0.139, -0.01, -0.137]}
        scale={[0.386, 2.745, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo004.geometry}
        material={materials.madera}
        position={[-2.045, 5.567, 0.633]}
        rotation={[-1.724, -1.531, 1.417]}
        scale={[0.501, 0.754, 0.557]}
      />
      <mesh
        geometry={nodes.Cubo005.geometry}
        material={materials.madera}
        position={[0.831, 3.309, -0.823]}
        rotation={[0.63, -0.001, 0.023]}
        scale={[0.386, 4.428, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo006.geometry}
        material={materials.madera}
        position={[-5.069, 3.598, -0.848]}
        rotation={[0.586, -0.002, 0.046]}
        scale={[0.407, 4.667, 0.632]}
      />
      <mesh
        geometry={nodes.Cubo007.geometry}
        material={materials.madera}
        position={[-5.06, 3.5, 2.33]}
        rotation={[2.516, -0.021, -0.026]}
        scale={[0.386, 4.428, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo008.geometry}
        material={materials.madera}
        position={[0.7, 3.154, 2.339]}
        rotation={[2.482, 0.022, -0.006]}
        scale={[0.386, 4.428, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo009.geometry}
        material={materials.madera}
        position={[-2.28, 1.399, 3.419]}
        rotation={[-3.074, 0.007, 1.595]}
        scale={[0.386, 4.694, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo011.geometry}
        material={materials.madera}
        position={[-2.278, 1.411, -1.738]}
        rotation={[-3.074, 0.002, 1.595]}
        scale={[0.344, 5.18, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo012.geometry}
        material={materials.madera}
        position={[-4.987, -0.316, -1.795]}
        rotation={[-0.132, 0.014, 0.064]}
        scale={[0.365, 2.595, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo013.geometry}
        material={materials.madera}
        position={[-4.958, -0.252, 3.325]}
        rotation={[0.19, -0.04, 0.048]}
        scale={[0.369, 2.595, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo014.geometry}
        material={materials.teja2}
        position={[-3.892, 4.486, 0.091]}
        rotation={[-0.867, -0.003, -0.005]}
        scale={[0.7, 0.094, 0.92]}
      />
      <mesh
        geometry={nodes.Cubo015.geometry}
        material={materials.teja1}
        position={[-3.913, 3.281, -0.879]}
        rotation={[-0.886, -0.012, -0.003]}
        scale={[0.687, 0.094, 0.766]}
      />
      <mesh
        geometry={nodes.Cubo017.geometry}
        material={materials.teja1}
        position={[-2.705, 4.282, 0.026]}
        rotation={[-0.867, -0.01, 0.006]}
        scale={[0.651, 0.094, 0.606]}
      />
      <mesh
        geometry={nodes.Cubo018.geometry}
        material={materials.teja2}
        position={[-2.631, 3.286, -0.802]}
        rotation={[-0.867, -0.003, -0.005]}
        scale={[0.598, 0.086, 0.705]}
      />
      <mesh
        geometry={nodes.Cubo019.geometry}
        material={materials.teja1}
        position={[-2.725, 2.28, -1.538]}
        rotation={[-0.867, -0.003, -0.005]}
        scale={[0.598, 0.086, 0.604]}
      />
      <mesh
        geometry={nodes.Cubo020.geometry}
        material={materials.teja2}
        position={[-1.457, 4.329, -0.009]}
        rotation={[-0.867, -0.01, 0.006]}
        scale={[0.651, 0.094, 0.606]}
      />
      <mesh
        geometry={nodes.Cubo021.geometry}
        material={materials.teja1}
        position={[-1.422, 3.308, -0.798]}
        rotation={[-0.867, -0.003, -0.005]}
        scale={[0.598, 0.086, 0.705]}
      />
      <mesh
        geometry={nodes.Cubo022.geometry}
        material={materials.teja2}
        position={[-1.51, 2.311, -1.568]}
        rotation={[-0.867, -0.003, -0.005]}
        scale={[0.684, 0.086, 0.604]}
      />
      <mesh
        geometry={nodes.Cubo016.geometry}
        material={materials.teja2}
        position={[-3.91, 2.267, -1.627]}
        rotation={[-0.867, -0.003, -0.005]}
        scale={[0.683, 0.086, 0.604]}
      />
      <mesh
        geometry={nodes.Cubo023.geometry}
        material={materials.teja1}
        position={[-0.265, 4.403, 0.158]}
        rotation={[-0.867, -0.01, 0.006]}
        scale={[0.673, 0.094, 0.777]}
      />
      <mesh
        geometry={nodes.Cubo024.geometry}
        material={materials.teja2}
        position={[-0.23, 3.281, -0.761]}
        rotation={[-0.867, -0.003, -0.005]}
        scale={[0.68, 0.086, 0.705]}
      />
      <mesh
        geometry={nodes.Cubo025.geometry}
        material={materials.teja1}
        position={[-0.18, 2.299, -1.548]}
        rotation={[-0.867, -0.003, -0.005]}
        scale={[0.684, 0.086, 0.604]}
      />
      <mesh
        geometry={nodes.Cubo026.geometry}
        material={materials.madera}
        position={[-5.037, 1.485, 0.737]}
        rotation={[0.012, -0.01, 0]}
        scale={[0.488, 0.6, 0.6]}
      />
      <mesh
        geometry={nodes.Cubo010.geometry}
        material={materials.teja2}
        position={[-0.172, 4.412, 1.58]}
        rotation={[-2.33, -0.011, 3.139]}
        scale={[0.679, 0.094, 0.813]}
      />
      <mesh
        geometry={nodes.Cubo027.geometry}
        material={materials.teja1}
        position={[-0.194, 3.282, 2.515]}
        rotation={[-2.256, 0.012, 3.139]}
        scale={[0.679, 0.094, 0.766]}
      />
      <mesh
        geometry={nodes.Cubo028.geometry}
        material={materials.teja1}
        position={[-1.393, 4.282, 1.611]}
        rotation={[-2.274, 0.01, -3.136]}
        scale={[0.679, 0.094, 0.774]}
      />
      <mesh
        geometry={nodes.Cubo029.geometry}
        material={materials.teja2}
        position={[-1.496, 3.286, 2.439]}
        rotation={[-2.275, 0.003, 3.137]}
        scale={[0.598, 0.086, 0.705]}
      />
      <mesh
        geometry={nodes.Cubo030.geometry}
        material={materials.teja1}
        position={[-1.372, 2.297, 3.16]}
        rotation={[-2.275, 0.003, 3.137]}
        scale={[0.624, 0.086, 0.604]}
      />
      <mesh
        geometry={nodes.Cubo031.geometry}
        material={materials.teja2}
        position={[-2.694, 4.329, 1.646]}
        rotation={[-2.274, 0.01, -3.136]}
        scale={[0.679, 0.094, 0.774]}
      />
      <mesh
        geometry={nodes.Cubo032.geometry}
        material={materials.teja1}
        position={[-2.732, 3.308, 2.435]}
        rotation={[-2.275, 0.003, 3.137]}
        scale={[0.624, 0.086, 0.705]}
      />
      <mesh
        geometry={nodes.Cubo033.geometry}
        material={materials.teja2}
        position={[-2.639, 2.327, 3.191]}
        rotation={[-2.275, 0.003, 3.137]}
        scale={[0.713, 0.086, 0.604]}
      />
      <mesh
        geometry={nodes.Cubo034.geometry}
        material={materials.teja2}
        position={[-0.136, 2.267, 3.264]}
        rotation={[-2.275, 0.003, 3.137]}
        scale={[0.713, 0.086, 0.604]}
      />
      <mesh
        geometry={nodes.Cubo035.geometry}
        material={materials.teja1}
        position={[-4.04, 4.362, 1.513]}
        rotation={[-2.274, 0.01, -3.136]}
        scale={[0.702, 0.094, 0.836]}
      />
      <mesh
        geometry={nodes.Cubo036.geometry}
        material={materials.teja2}
        position={[-3.974, 3.281, 2.397]}
        rotation={[-2.275, 0.003, 3.137]}
        scale={[0.709, 0.086, 0.705]}
      />
      <mesh
        geometry={nodes.Cubo037.geometry}
        material={materials.teja1}
        position={[-4.027, 2.325, 3.183]}
        rotation={[-2.275, 0.003, 3.137]}
        scale={[0.713, 0.086, 0.604]}
      />
      <group
        position={[-2.115, -0.158, -2.039]}
        rotation={[-0.128, -0.001, 0.007]}
        scale={[0.987, 0.802, 0.12]}>
        <mesh geometry={nodes.Cubo041_1.geometry} material={materials.madera} />
        <mesh geometry={nodes.Cubo041_2.geometry} material={materials.Material} />
      </group>
      <group
        position={[0.964, -0.31, 0.798]}
        rotation={[0, 0, -1.651]}
        scale={[1.282, 0.139, 1.282]}>
        <mesh geometry={nodes.Cilindro.geometry} material={materials.madera} />
        <mesh geometry={nodes.Cilindro_1.geometry} material={materials.teja2} />
        <mesh geometry={nodes.Cilindro_2.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cilindro_3.geometry} material={materials.teja1} />
      </group>
      <group
        position={[1.045, 3.235, 0.645]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.687, -0.111, -0.687]}>
        <mesh geometry={nodes.Cilindro001.geometry} material={materials.madera} />
        <mesh geometry={nodes.Cilindro001_1.geometry} material={materials.Material} />
      </group>
      <group
        position={[-2.089, -0.118, 3.511]}
        rotation={[-3.007, 0.004, 3.135]}
        scale={[0.987, 0.802, 0.12]}>
        <mesh geometry={nodes.Cubo043_1.geometry} material={materials.madera} />
        <mesh geometry={nodes.Cubo043_2.geometry} material={materials.Material} />
      </group>
      <mesh
        geometry={nodes.Esfera.geometry}
        material={materials.metal}
        position={[1.029, -0.655, 0.187]}
        scale={[0.091, 0.146, 0.146]}
      />
      <mesh
        geometry={nodes.Cubo062.geometry}
        material={materials.CESPED}
        position={[-0.042, -1.512, -5.891]}
        rotation={[-Math.PI / 2, -1.571, 0]}
        scale={0.247}
      />
      <mesh
        geometry={nodes.Cubo063.geometry}
        material={materials.CESPED}
        position={[-0.672, -1.512, -5.823]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.247, 0.172, 0.223]}
      />
      <mesh
        geometry={nodes.Cubo064.geometry}
        material={materials.CESPED}
        position={[-3.805, -1.512, -5.823]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.305, 0.212, 0.275]}
      />
      <mesh
        geometry={nodes.Cubo065.geometry}
        material={materials.CESPED}
        position={[-3.187, -1.512, -5.761]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.305, 0.149, 0.2]}
      />
      <mesh
        geometry={nodes.Cubo066.geometry}
        material={materials.CESPED}
        position={[-4.342, -1.512, -5.761]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.305, 0.149, 0.2]}
      />
      <mesh
        geometry={nodes.Cubo072.geometry}
        material={materials.CESPED}
        position={[-3.451, -0.18, -3.949]}
        rotation={[-2.061, -Math.PI / 2, 0]}
        scale={[0.136, 0.1, 0.135]}
      />
      <mesh
        geometry={nodes.Cubo073.geometry}
        material={materials.CESPED}
        position={[-3.79, -0.15, -3.947]}
        rotation={[-2.123, -Math.PI / 2, 0]}
        scale={[0.094, 0.046, 0.062]}
      />
      <mesh
        geometry={nodes.Cubo074.geometry}
        material={materials.CESPED}
        position={[2.134, -1.554, 7.286]}
        rotation={[1.842, 1.571, 0]}
        scale={[0.228, 0.167, 0.225]}
      />
      <mesh
        geometry={nodes.Cubo075.geometry}
        material={materials.CESPED}
        position={[-1.852, -1.554, 7.286]}
        rotation={[1.842, 1.571, 0]}
        scale={[0.296, 0.218, 0.293]}
      />
      <mesh
        geometry={nodes.Cubo076.geometry}
        material={materials.CESPED}
        position={[-2.491, -1.554, 7.286]}
        rotation={[1.842, 1.57, 0]}
        scale={[0.18, 0.132, 0.178]}
      />
      <mesh
        geometry={nodes.Cubo077.geometry}
        material={materials.CESPED}
        position={[-4.742, -1.554, 7.286]}
        rotation={[1.842, 1.57, 0]}
        scale={[0.18, 0.132, 0.178]}
      />
      <mesh
        geometry={nodes.Cubo078.geometry}
        material={materials.CESPED}
        position={[-4.296, -1.666, 7.286]}
        rotation={[1.842, 1.57, 0]}
        scale={[0.18, 0.132, 0.178]}
      />
      <mesh
        geometry={nodes.Cubo079.geometry}
        material={materials.CESPED}
        position={[0.796, -1.396, -2.21]}
        rotation={[-0.063, -0.353, 0.434]}
        scale={[0.134, 0.149, 0.154]}
      />
      <mesh
        geometry={nodes.Cubo080.geometry}
        material={materials.CESPED}
        position={[1.229, -1.488, -1.872]}
        rotation={[-2.946, 1.263, -2.872]}
        scale={[0.126, 0.141, 0.145]}
      />
      <mesh
        geometry={nodes.Cubo081.geometry}
        material={materials.CESPED}
        position={[-2.397, -1.488, -2.009]}
        rotation={[-0.981, 1.5, 1.436]}
        scale={[0.126, 0.141, 0.145]}
      />
      <mesh
        geometry={nodes.Cubo082.geometry}
        material={materials.CESPED}
        position={[-2.719, -1.488, -2.039]}
        rotation={[2.16, -1.5, -1.436]}
        scale={[-0.103, -0.085, -0.145]}
      />
      <mesh
        geometry={nodes.Cubo083.geometry}
        material={materials.CESPED}
        position={[-2.397, -1.488, -2.146]}
        rotation={[-0.06, 0.17, 0.466]}
        scale={[0.053, 0.038, 0.065]}
      />
      <mesh
        geometry={nodes.Cubo084.geometry}
        material={materials.CESPED}
        position={[-3.685, 0.133, -2.785]}
        rotation={[2.16, -1.5, -1.436]}
        scale={[-0.103, -0.085, -0.095]}
      />
      <mesh
        geometry={nodes.Cubo085.geometry}
        material={materials.CESPED}
        position={[-3.898, 0.19, -3.074]}
        rotation={[-0.06, 0.164, 0.465]}
        scale={[0.096, 0.107, 0.11]}
      />
      <mesh
        geometry={nodes.Cubo086.geometry}
        material={materials.CESPED}
        position={[-3.14, -0.316, -2.71]}
        rotation={[-3.083, 0.059, -1.115]}
        scale={[0.058, 0.065, 0.067]}
      />
      <mesh
        geometry={nodes.Cubo087.geometry}
        material={materials.CESPED}
        position={[-3.14, -0.256, -2.502]}
        rotation={[-3.083, 0.059, -1.115]}
        scale={[0.058, 0.065, 0.067]}
      />
      <mesh
        geometry={nodes.Cubo088.geometry}
        material={materials.CESPED}
        position={[-3.14, -0.163, -2.642]}
        rotation={[-3.083, 0.059, -1.115]}
        scale={[0.047, 0.053, 0.054]}
      />
      <mesh
        geometry={nodes.Cubo089.geometry}
        material={materials.CESPED}
        position={[6.632, -1.526, -3.797]}
        rotation={[3.138, 0.059, -1.115]}
        scale={[0.079, 0.088, 0.148]}
      />
      <mesh
        geometry={nodes.Cubo090.geometry}
        material={materials.CESPED}
        position={[6.691, -1.582, -3.329]}
        rotation={[-3.083, 0.059, -1.115]}
        scale={[0.191, 0.213, 0.219]}
      />
      <mesh
        geometry={nodes.Cubo091.geometry}
        material={materials.CESPED}
        position={[6.151, -1.347, -4.45]}
        rotation={[-0.135, 0.874, 0.434]}
        scale={[0.143, 0.158, 0.266]}
      />
      <mesh
        geometry={nodes.Cubo092.geometry}
        material={materials.CESPED}
        position={[6.105, -1.205, -4.903]}
        rotation={[0.051, -0.311, 0.407]}
        scale={[0.141, 0.293, 0.22]}
      />
      <mesh
        geometry={nodes.Cubo093.geometry}
        material={materials.CESPED}
        position={[5.527, -1.529, -5.789]}
        rotation={[3.072, -1.512, -1.184]}
        scale={[0.079, 0.088, 0.148]}
      />
      <mesh
        geometry={nodes.Cubo094.geometry}
        material={materials.CESPED}
        position={[5.88, -1.4, 2.716]}
        rotation={[-0.727, 1.506, 1.119]}
        scale={[0.107, 0.118, 0.128]}
      />
      <mesh
        geometry={nodes.Cubo095.geometry}
        material={materials.CESPED}
        position={[5.559, -1.309, 2.637]}
        rotation={[0.055, 0.467, 0.366]}
        scale={[0.106, 0.219, 0.164]}
      />
      <mesh
        geometry={nodes.Cubo096.geometry}
        material={materials.CESPED}
        position={[6.334, -1.384, 2.74]}
        rotation={[0.075, 0.857, 0.335]}
        scale={[0.081, 0.12, 0.132]}
      />
      <mesh
        geometry={nodes.Cesped1.geometry}
        material={materials.CESPED}
        position={[4.097, -1.401, 0.415]}
        rotation={[0.244, 0.89, 0.446]}
        scale={[0.107, 0.118, 0.128]}
      />
      <mesh
        geometry={nodes.Cubo098.geometry}
        material={materials.CESPED}
        position={[4.034, -1.301, 0.084]}
        rotation={[0.023, -0.912, 0.473]}
        scale={[0.089, 0.212, 0.123]}
      />
      <mesh
        geometry={nodes.Cubo099.geometry}
        material={materials.CESPED}
        position={[1.111, -1.401, 3.482]}
        rotation={[2.933, -0.748, -2.648]}
        scale={[0.107, 0.118, 0.128]}
      />
      <mesh
        geometry={nodes.Cubo100.geometry}
        material={materials.CESPED}
        position={[1.125, -1.301, 3.819]}
        rotation={[3.128, 0.096, -2.685]}
        scale={[0.089, 0.212, 0.123]}
      />
      <mesh
        geometry={nodes.Cubo101.geometry}
        material={materials.CESPED}
        position={[0.8, -1.432, 3.829]}
        rotation={[-3.064, 0.695, -2.618]}
        scale={[0.107, 0.118, 0.128]}
      />
      <mesh
        geometry={nodes.Cubo052.geometry}
        material={materials.ROCA}
        position={[6.693, -2.363, -5.325]}
        rotation={[0, 0.248, 0]}
        scale={[0.813, 1.281, 0.813]}
      />
      <mesh
        geometry={nodes.Cubo054.geometry}
        material={materials.ROCA}
        position={[4.942, -2.264, -6.294]}
        rotation={[0, -0.77, 0]}
        scale={[0.866, 0.976, 0.866]}
      />
      <mesh
        geometry={nodes.Cubo055.geometry}
        material={materials.ROCA}
        position={[2.749, -2.475, -6.596]}
        rotation={[-2.829, -0.866, 0.14]}
        scale={[1.17, 1.319, 1.17]}
      />
      <mesh
        geometry={nodes.Cubo056.geometry}
        material={materials.ROCA}
        position={[-7.05, -1.525, -2.844]}
        rotation={[0, -0.429, 0]}
        scale={[1.603, 1.926, 1.603]}
      />
      <mesh
        geometry={nodes.Cubo057.geometry}
        material={materials.ROCA}
        position={[-6.645, -1.63, -4.152]}
        rotation={[0, 0.801, 0]}
        scale={[0.925, 1.786, 0.925]}
      />
      <mesh
        geometry={nodes.Cubo058.geometry}
        material={materials.ROCA}
        position={[-7.161, -2.331, -0.936]}
        rotation={[-0.256, -0.664, 2.881]}
        scale={[0.847, 1.056, 0.85]}
      />
      <mesh
        geometry={nodes.Cubo059.geometry}
        material={materials.ROCA}
        position={[-6.501, -2.321, -5.541]}
        rotation={[0, 0.017, 0]}
        scale={[0.793, 0.561, 0.793]}
      />
      <mesh
        geometry={nodes.Cubo060.geometry}
        material={materials.ROCA}
        position={[-5.675, -2.096, -6.105]}
        scale={[0.649, 1.11, 0.614]}
      />
      <mesh
        geometry={nodes.Esfera001.geometry}
        material={materials.ROCA}
        position={[3.195, -1.509, 0.766]}
        scale={[0.859, 0.172, 1.23]}
      />
      <mesh
        geometry={nodes.Esfera002.geometry}
        material={materials.ROCA}
        position={[5.4, -1.501, 1.491]}
        scale={[0.859, 0.172, 0.908]}
      />
      <mesh
        geometry={nodes.Esfera003.geometry}
        material={materials.ROCA}
        position={[5.4, -1.517, -1.178]}
        rotation={[0, 0.704, 0]}
        scale={[0.683, 0.172, 0.849]}
      />
      <mesh
        geometry={nodes.Esfera004.geometry}
        material={materials.ROCA}
        position={[3.469, -1.518, -1.595]}
        rotation={[0, 1.363, 0]}
        scale={[0.483, 0.122, 0.601]}
      />
      <mesh
        geometry={nodes.Cubo061.geometry}
        material={materials.ROCA}
        position={[-1.915, -1.363, -4.661]}
        rotation={[0.376, 0, 0]}
        scale={[0.476, 0.244, 0.291]}
      />
      <mesh
        geometry={nodes.Esfera005.geometry}
        material={materials.ROCA}
        position={[3.53, -1.39, 1.001]}
        rotation={[-Math.PI, 0.222, -Math.PI]}
        scale={[0.257, 0.048, 0.319]}
      />
      <mesh
        geometry={nodes.Cubo067.geometry}
        material={materials.CESPED}
        position={[-5.461, -1.599, -5.761]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.206, 0.101, 0.135]}
      />
      <mesh
        geometry={nodes.Cubo102.geometry}
        material={materials.ROCA}
        position={[7.566, -2.569, 7.845]}
        rotation={[-2.819, 0.892, -0.356]}
        scale={[1.319, 1.487, 1.319]}
      />
      <mesh
        geometry={nodes.Cubo103.geometry}
        material={materials.ROCA}
        position={[4.748, -1.016, 8.496]}
        rotation={[Math.PI, -1.213, Math.PI]}
        scale={[1.032, 1.806, 1.032]}
      />
      <mesh
        geometry={nodes.Cubo104.geometry}
        material={materials.ROCA}
        position={[7.357, -2.285, 6.015]}
        rotation={[0, 0.017, 0]}
        scale={[0.793, 0.787, 0.793]}
      />
      <mesh
        geometry={nodes.Cubo.geometry}
        material={materials.madera}
        position={[11.482, -2.205, -2.362]}
        scale={[0.631, 1.477, 0.631]}
      />
      <mesh
        geometry={nodes.Cubo038.geometry}
        material={materials.madera}
        position={[11.232, -1.66, 0.444]}
        scale={[0.841, 0.13, 2.501]}
      />
      <mesh
        geometry={nodes.Cubo040.geometry}
        material={materials.madera}
        position={[8.716, -2.027, -1.43]}
        scale={[3.719, 0.295, 0.325]}
      />
      <mesh
        geometry={nodes.Cubo039.geometry}
        material={materials.madera}
        position={[8.716, -2.027, 2.46]}
        scale={[3.719, 0.295, 0.325]}
      />
      <mesh
        geometry={nodes.Cubo041.geometry}
        material={materials.madera}
        position={[9.155, -1.66, 0.444]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.841, 0.13, 2.501]}
      />
      <mesh
        geometry={nodes.Cubo042.geometry}
        material={materials.madera}
        position={[7.413, -1.66, 0.444]}
        rotation={[-Math.PI, 0.038, -Math.PI]}
        scale={[0.729, 0.13, 2.501]}
      />
      <mesh
        geometry={nodes.Cubo043.geometry}
        material={materials.madera}
        position={[7.016, -2.205, -2.362]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.631, 1.477, 0.631]}
      />
      <mesh
        geometry={nodes.Cubo044.geometry}
        material={materials.madera}
        position={[7.016, -2.205, 3.421]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.631, 1.477, 0.631]}
      />
      <mesh
        geometry={nodes.Cubo045.geometry}
        material={materials.madera}
        position={[11.47, -2.205, 3.421]}
        rotation={[0, -1.571, 0]}
        scale={[0.631, 1.477, 0.631]}
      />
      <mesh
        geometry={nodes.Cubo046.geometry}
        material={materials.madera}
        position={[5.61, 0.535, 3.316]}
        scale={[0.494, 2.195, 0.494]}
      />
      <group position={[6.807, 1.738, 3.334]} scale={[0.636, 0.112, 0.636]}>
        <mesh geometry={nodes.Cubo057_1.geometry} material={materials.LAMPARA} />
        <mesh geometry={nodes.Cubo057_2.geometry} material={materials.VIDRIO} />
      </group>
      <mesh
        geometry={nodes.Cubo048.geometry}
        material={materials.madera}
        position={[6.657, 2.161, 3.301]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.127, 0.681, 0.127]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/house.glb')
