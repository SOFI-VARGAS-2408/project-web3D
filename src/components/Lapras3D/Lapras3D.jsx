import { useGLTF } from "@react-three/drei";

export function Lapras3D(props) {
  const { nodes, materials } = useGLTF("/models-3d/lapras3d.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0131_00} />
        <skinnedMesh
          castShadow
          geometry={nodes.mesh_6_BodyATattu01.geometry}
          material={materials.BodyATattu00_mat}
          skeleton={nodes.mesh_6_BodyATattu01.skeleton}
        />
        <skinnedMesh
          castShadow
          geometry={nodes.mesh_6_BodyATattu01_1.geometry}
          material={materials.Eye_mat}
          skeleton={nodes.mesh_6_BodyATattu01_1.skeleton}
        />
        <skinnedMesh
          castShadow
          geometry={nodes.mesh_6_BodyATattu01_2.geometry}
          material={materials.BodyB_mat}
          skeleton={nodes.mesh_6_BodyATattu01_2.skeleton}
        />
        <skinnedMesh
          castShadow
          geometry={nodes.mesh_6_BodyATattu01_3.geometry}
          material={materials.BodyBVco_mat}
          skeleton={nodes.mesh_6_BodyATattu01_3.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models-3d/lapras3d.glb");
