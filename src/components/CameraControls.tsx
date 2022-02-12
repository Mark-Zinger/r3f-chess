import { OrbitControls } from '@react-three/drei';
import {useFrame, useThree} from "@react-three/fiber";
import * as THREE from 'three';
import {useAppSelector} from "../app/hooks";
import {selectGame} from "../features/game/gameSlice";





const cameraPositions = {
  'b': new THREE.Vector3(0, 5, 7),
  'w': new THREE.Vector3(0, 5, -7)
}


function CameraControls() {
  
  const { turn } = useAppSelector(selectGame);
  const { camera } = useThree();
  
  // useEffect(() => {
  //   camera.position.copy(cameraPositions[turn])
  // },[value])
  
  
  return <OrbitControls/>;
}


export default CameraControls;