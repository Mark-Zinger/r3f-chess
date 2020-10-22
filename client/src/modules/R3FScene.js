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
      <OrbitControls/>
      
      <Board/>
    </Canvas>
  )
}

