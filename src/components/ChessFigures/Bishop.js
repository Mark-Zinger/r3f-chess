import React from 'react'
import { useGLTF } from '@react-three/drei'
import { getColorMaterial } from '../../Game';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/resources/bishop.gltf');

  return (
    <group 
      {...props} 
      dispose={null}
    >
      <mesh
        material={getColorMaterial(props.color)}
        geometry={nodes.Chess_Bishop001.geometry}
        position={[0, 0.45, 0]}
        scale={new Array(3).fill(0.15)}
      />
    </group>
  )
}

useGLTF.preload('/resources/bishop.gltf')
