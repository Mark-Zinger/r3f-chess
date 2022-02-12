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
    p: { figureNode: 'p', file: 'pawn.gltf', offsetHeight: 0 },
    n: { figureNode: 'n', file: 'knight.gltf', offsetHeight: 0 },
    b: { figureNode: 'b', file: 'bishop.gltf', offsetHeight: 0 },
    r: { figureNode: 'r', file: 'rook.gltf', offsetHeight: 0 },
    q: { figureNode: 'q', file: 'queen.gltf', offsetHeight: 0 },
    k: { figureNode: 'k', file: 'king.gltf', offsetHeight: 0 }
};

const getFigureData = ({chessPosition, figureType, color}: IChessFigure): IfigureData => {

    const data = figureData[figureType.toLocaleLowerCase() as keyof typeof figureData]
    const position = getPosFromChessCord(chessPosition);
    position[1] = data.offsetHeight;

    return {
        ...data,
        position: new THREE.Vector3(...position),
        isBlack: color === "b"
    };
};


export default getFigureData;