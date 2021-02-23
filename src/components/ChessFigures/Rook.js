
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { getColorMaterial } from '../../Game';


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/resources/rook.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={getColorMaterial(props.color)}
        geometry={nodes.Chess_Rook.geometry}
        position={[0, 0.41, 0]}
        scale={new Array(3).fill(0.15)}
      />
    </group>
  )
}

useGLTF.preload('/resources/rook.gltf')
