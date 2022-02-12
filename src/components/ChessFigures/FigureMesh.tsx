import {forwardRef} from "react";

import getFigureData from "../../helpers/getFigureData";
import {useGLTF} from "@react-three/drei";
import {DreiGLTF} from "../../types/DreiGLTF";
import {FigureType} from "../../../chess";
import {ChessColors} from "../../features/game/GameState";
import * as THREE from "three";


export interface FigureMeshProps {
  type: FigureType
  color: ChessColors,
  scale?: number,
  position?: THREE.Vector3 | [number,number,number];
  rotation?: [number,number,number];
}

const FigureMesh = forwardRef<THREE.Mesh,FigureMeshProps>(
  (props: FigureMeshProps, ref) => {
    const { type, ...ownProps } = props;
    const { file, isBlack } = getFigureData(props);
    const { nodes } = useGLTF(`/resources/${file}`) as DreiGLTF;
    
    
    return (
      <mesh
        geometry={nodes[type].geometry}
        rotation={[0, 0, 0]}
        scale={0.15}
        ref={ref}
        castShadow
        receiveShadow
        {...ownProps}
      >
        <meshPhongMaterial color={isBlack ? '#222222' : '#A5A5A5'} transparent />
      </mesh>
    )
})

export default FigureMesh;