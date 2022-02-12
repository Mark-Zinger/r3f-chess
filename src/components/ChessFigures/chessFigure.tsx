import {useCallback, useContext, useEffect, useRef} from "react";

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectHover, setHover, unHover } from '../../features/hoverSlice';
import { selectSelected, setSelected } from "../../features/selectedSlice";

import { DreiGLTF } from '../../types/DreiGLTF';
import * as THREE from 'three';
import {lerp} from "three/src/math/MathUtils";

import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';

import getFigureData, {isBlackColor} from '../../helpers/getFigureData';
import {FigureType} from "../../../chess";
import {ChessColors} from "../../features/game/GameState";
import {chessCordType, getPosFromChessCord,} from "../../helpers/BoardHelpers";
import FigureMesh from "./FigureMesh";
import {SelectContext} from "../../providers/SelectProvider";




const aliveV = new THREE.Vector3(1,1,1);
const dieV = new THREE.Vector3(0,0,0)


function ChessFigure(props: IChessFigure) {
    
    const groupRef = useRef<THREE.Mesh>();
    const figureRef = useRef<THREE.Mesh>();
    
    const { chessPosition, isDie, type, color } = props;
    const position = getPosFromChessCord(chessPosition)
    const isBlack = isBlackColor(color);
    
    const hover = useAppSelector(selectHover);
    const selected = useAppSelector(selectSelected);
    
    const { onSelected } = useContext(SelectContext);
    
    useEffect(()=> {
        switch (selected.target){
            case chessPosition: onSelected(figureRef); break;
            case null: onSelected(null)
        }
        
    },[selected,chessPosition ])
    
    const dispatch = useAppDispatch();

    const onPointerOverHandler = () => {
        dispatch(setHover(chessPosition));
    }
    const onClickHandler = useCallback(() => {
        dispatch(setSelected(chessPosition))
    },[chessPosition])

    useFrame(()=>{
        if(groupRef.current && figureRef.current){
            groupRef.current.position.lerp(position, 0.15)
            
            //die logic
            groupRef.current.scale.lerp( (isDie ? dieV : aliveV ), 0.15 )
            //@ts-ignore
            figureRef.current.material.opacity = lerp(figureRef.current?.material.opacity, isDie? 0 : 1, 0.15)
        }
    })

    return (
        <group ref={groupRef}>
            <FigureMesh
                type={type}
                color={color}
                onPointerOver={() => dispatch(setHover(chessPosition))}
                onPointerOut={() => dispatch(unHover())}
                onClick={onClickHandler}
                rotation={[0,isBlack? Math.PI : 0, 0]}
                castShadow
                //@ts-ignore
                ref={figureRef}
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