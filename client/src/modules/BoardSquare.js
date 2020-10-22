import React, { memo, useEffect } from 'react';

import * as THREE from 'three'

const BlackColor = '#000';
const WhiteColor = '#fff';
const size = 1;

const BoardSqare = memo((props) => {

  const {
    isBlack,
    chessPosition,
    XYPosition
  } = props;

  useEffect(()=>{
    console.log(isBlack,
      chessPosition,
      XYPosition)
  },[])

  const geometry = new THREE.PlaneBufferGeometry(size, size, 1);
  const material = new THREE.MeshStandardMaterial({
     color: isBlack? BlackColor : WhiteColor, side: THREE.DoubleSide
   });

  return (
    <group>
      <mesh material={material} position={[ XYPosition.x-4, 0, XYPosition.y-4 ]} rotation-x={Math.PI / 2} geometry={geometry} {...props} />
    </group>
  )

})

export default BoardSqare;

