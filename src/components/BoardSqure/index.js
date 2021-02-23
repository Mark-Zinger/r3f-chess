import React, { memo, useEffect, useRef } from 'react';
import * as THREE from 'three'
import { Text,Billboard } from '@react-three/drei'
// import BlackMaterial from '../materials/BlackMaterial';
// import WhiteMaterial from '../materials/WhiteMaterial';
import { sqarePositions } from '../../Game';
// import PlaneGeometry from '../materials/PlaneGeometry';


const BlackMaterial = new THREE.MeshPhongMaterial({
  color: '#0D0D0D',
  side: THREE.DoubleSide
})

const WhiteMaterial = new THREE.MeshPhongMaterial({
  side: THREE.DoubleSide,
  color: '#F2F2F2'
})

const PlaneGeometry  = new THREE.PlaneBufferGeometry(1, 1, 1);

const BoardSqare = memo((props) => {

  const {
    isBlack,
    chessPosition,
    XYPosition,
    setSquaresPosition
  } = props;

  const squareRef = useRef();

  // useEffect(()=> {
  //   if(squareRef.current) sqarePositions.push(squareRef.current.getWorldPosition());
  // },[])

  return (
    <group position={[ XYPosition.x-3.5, 0, XYPosition.y-3.5  ]} >
      <Text
        position={[0,0.01,0]}
        rotation={[ - Math.PI / 2,0,-1.6]}
        fontSize={0.3}
        color={isBlack ? 'white' : 'black'}
        >
          {chessPosition}
      </Text>
      <mesh
        ref={squareRef}
        material={ isBlack ? BlackMaterial : WhiteMaterial } 
        rotation-x={Math.PI / 2} 
        geometry={PlaneGeometry} {...props} 
      />
    </group>
  )

})

export default BoardSqare;
