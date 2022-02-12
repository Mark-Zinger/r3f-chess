import {FC, useRef, useState} from "react";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import * as THREE from 'three';
import FigureMesh, {FigureMeshProps} from "../../../ChessFigures/FigureMesh";



const PromotionFigure = (props: FigureMeshProps) => {
  


  
  return (
    <Canvas>
      <PromotionButtonCanvasChildren {...props}/>
    </Canvas>
  )
}

const PromotionButtonCanvasChildren:FC<FigureMeshProps> = (props) => {
  const { camera, mouse } = useThree()
  const [vec] = useState(() => new THREE.Vector3())
  const FigureRef = useRef<THREE.Mesh>()
  
  useFrame(() => {
  
    camera.position.lerp(vec.set(Math.sin(mouse.x) *7, 0, Math.cos(mouse.x)*7), 0.05)
    camera.lookAt(0,0,0)
  })
  
  return <>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <pointLight position={[-10, 10, -10]} />
    <group ref={FigureRef}>
      <FigureMesh
        {...props}
        scale={0.7}
        position={[0, -2.5, 0]}
        rotation={[0,7.5,0]}
      />
    </group>
  </>
}

export default PromotionFigure