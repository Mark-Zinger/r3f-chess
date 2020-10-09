import React, { useRef, useState, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from 'react-three-fiber';
import Board from './Board';
import {OrbitControls} from 'drei'

export default () => {
  return (
    <Canvas
      camera={{position: [10,10,10]}} 
      onCreated={({scene, gl})=>{
        // console.log(scene, gl);
        window.scene = scene;
        window.THREE = THREE
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls/>
      
      <Board/>
    </Canvas>
  )
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}