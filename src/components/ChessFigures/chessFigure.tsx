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
import {FigureType} from "../../../chess";
import {ChessColors} from "../../features/game/GameState";
import {chessCordType, getPosFromChessCord} from "../../helpers/BoardHelpers";
import FigureMesh from "./FigureMesh";




const aliveV = new THREE.Vector3(1,1,1);
const dieV = new THREE.Vector3(0,0,0)


function ChessFigure(props: IChessFigure) {
    
    const figureRef = useRef<THREE.Mesh>();
    const materialRef = useRef<THREE.MeshPhongMaterial>();
    
    const { chessPosition, isDie, type, color } = props;
    const position = getPosFromChessCord(chessPosition)
    
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
            <FigureMesh
                type={type}
                color={color}
                onPointerOver={() => dispatch(setHover(chessPosition))}
                onPointerOut={() => dispatch(unHover())}
                onClick={onClickHandler}
                //@ts-ignore
                ref={materialRef}
            />
        </group>
    );
}


export interface IChessFigure {
    chessPosition: chessCordType;
    type: FigureType;
    color: ChessColors;
    isDie: boolean;
}


export default ChessFigure;