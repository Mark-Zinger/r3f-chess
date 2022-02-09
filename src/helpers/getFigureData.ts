import { getPosFromChessCord, threeVectorPoint } from './BoardHelpers';
import { IChessFigure } from '../components/ChessFigures/chessFigure';
import * as THREE from 'three';


export interface IfigureData {
    figureNode: string;
    file: string;
    isBlack: boolean;
    position: THREE.Vector3;
    offsetHeight: number;
}

const figureData = {
    p: { figureNode: 'Chess_Pawn', file: 'pawn.gltf', offsetHeight: -0.27 },
    n: { figureNode: 'Chess_Knight001', file: 'knight.gltf', offsetHeight: -0.15 },
    b: { figureNode: 'Chess_Bishop001', file: 'bishop.gltf', offsetHeight: -0.1 },
    r: { figureNode: 'Chess_Rook', file: 'rook.gltf', offsetHeight: -0.11 },
    q: { figureNode: 'Chess_Queen', file: 'queen.gltf', offsetHeight: -0.05 },
    k: { figureNode: 'Cylinder', file: 'king.gltf', offsetHeight: 0 }
};

const getFigureData = ({chessPosition, figureType, color}: IChessFigure): IfigureData => {

    const data = figureData[figureType.toLowerCase()]
    const position = getPosFromChessCord(chessPosition);
    position[1] = data.offsetHeight;

    return {
        ...data,
        position: new THREE.Vector3(...position),
        isBlack: color === "b"
    };
};


export default getFigureData;