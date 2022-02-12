import {useCallback, useRef} from "react";

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectHover, setHover, unHover } from '../../features/hoverSlice';
import { selectSelected, setSelected } from "../../features/selectedSlice";

import { DreiGLTF } from '../../types/DreiGLTF';
import * as THREE from 'three';
import {lerp} from "three/src/math/MathUtils";

import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';

import getFigureData from '../../helpers/getFigureData';

const aliveV = new THREE.Vector3(1,1,1);
const dieV = new THREE.Vector3(0,0,0)


function ChessFigure(props: IChessFigure) {
    
    const figureRef = useRef<THREE.Mesh>();
    const materialRef = useRef<THREE.MeshPhongMaterial>();
    
    const { chessPosition, isDie } = props;
    const { file, figureNode, isBlack, position } = getFigureData(props);    
    const { nodes } = useGLTF(`/resources/${file}`) as DreiGLTF;
    
    const hover = useAppSelector(selectHover);
    const selected = useAppSelector(selectSelected);
    
    const dispatch = useAppDispatch();

    const onPointerOverHandler = () => {
        dispatch(setHover(chessPosition));
    }
    const onClickHandler = useCallback(() => {
        dispatch(setSelected(chessPosition))
    },[chessPosition])

    useFrame(()=>{
        if(figureRef.current && materialRef.current){
            figureRef.current.position.lerp(position, 0.15)
            //die logic
            figureRef.current.scale.lerp( (isDie ? dieV : aliveV ), 0.15 )
            materialRef.current.opacity = lerp(materialRef.current.opacity, isDie? 0 : 1, 0.15)
        }
    })

    return (
        <group ref={figureRef}>
            <mesh
                geometry={nodes[figureNode].geometry}
                position={[0, 0.55, 0]}
                rotation={[0, -Math.PI / 8, 0]}
                scale={0.15}
                onPointerOver={() => dispatch(setHover(chessPosition))}
                onPointerOut={() => dispatch(unHover())}
                
                onClick={onClickHandler}
            >
                <meshPhongMaterial ref={materialRef} color={isBlack ? '#222222' : '#A5A5A5'} transparent />
            </mesh>
        </group>
    );
}

// useGLTF.preload('/resources/king.gltf');

export interface IChessFigure {
    chessPosition: string;
    figureType: string;
    color: string;
    isDie: boolean;
}


export default ChessFigure;