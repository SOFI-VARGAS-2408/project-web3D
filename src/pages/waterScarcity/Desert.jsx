import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Desert (props) {
    const { nodes, materials } = useGLTF('models-3d/Desert.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desert.geometry}
        material={materials.MaterialDesert}
      />
    </group>
  )
}

useGLTF.preload('models-3d/Desert.glb')
