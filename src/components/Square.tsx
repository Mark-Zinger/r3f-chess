import * as THREE from 'three';
import {threeVectorPoint} from "../helpers/BoardHelpers";
import {ThreeEvent} from "@react-three/fiber";


const Square = (props: SquareProps) => {

    const {
        color,
        position=null,
        opacity=1,
        onClick=()=>{}
    } = props

    return (
        <mesh 
            rotation={[-Math.PI / 2, 0, 0]}
            position={position ? position : [0,0,0]}
            onClick={onClick}
        >
            <planeGeometry args={[1, 1]} />
            <meshLambertMaterial
                color={color}
                side={THREE.DoubleSide}
                transparent={true}
                opacity={opacity}
            />
        </mesh>
    )
}

interface SquareProps {
    color: string;
    position?: threeVectorPoint;
    opacity: number;
    onClick?: (event: ThreeEvent<MouseEvent>) => void
}

export default Square

