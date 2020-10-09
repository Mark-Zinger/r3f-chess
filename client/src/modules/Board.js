
import React, { useRef, Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { getBoard } from './Game'

const BlackColor = '#000';
const WhiteColor = '#fff';
const size = 1;


const generateGameGrid = () => {
  const Grid = new Array(64).fill('')
    .map((_, i)=>{

      

      return i
    })
  return grid
}




export default (props) => {
  
  const boardRef = useRef();

  useEffect(() => {
    console.log(boardRef.current)
    console.log(getBoard())
  },[])

  const geometry = new THREE.PlaneBufferGeometry(size, size, 1);
  const material = new THREE.MeshStandardMaterial({color: BlackColor, side: THREE.DoubleSide});
  
  return (
    <group ref={boardRef}>
      <mesh material={material} rotation-x={Math.PI / 2} geometry={geometry} {...props}/>
    </group>
  )
}
