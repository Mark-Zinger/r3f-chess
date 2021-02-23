import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame } from 'react-three-fiber';
import Board from '../Board';
import {OrbitControls, Sky} from '@react-three/drei';

export default () => {
  return (
    <Canvas camera={{position: [10,10,10]}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls/>
      <Sky/>
      <Board/>
    </Canvas>
  )
}