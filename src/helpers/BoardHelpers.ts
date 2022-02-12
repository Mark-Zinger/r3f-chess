import * as THREE from "three";
import {ChessBoardType, ChessPiece} from "../../chess";

export type xyPoint = { x: number; y: number };
export type threeVectorPoint = [number,number,number];

export type ValuesOf<T extends any[]>= T[number];

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const chessCords = letters.map(
  letter =>
    new Array(8)
    .fill('')
    .map((_,index) => letter+index)
).flat();

export type chessCordType =  ValuesOf<typeof chessCords>;


export function getXYPosition(i: number): xyPoint {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return { x, y };
}

export function isBlack(i: number): boolean {
    const { x, y } = getXYPosition(i);
    return (x + y) % 2 === 1;
}

export function getChessPosition(i: number):chessCordType {
    const { x, y } = getXYPosition(i);
    const letter = letters[x];
    return `${letter}${y + 1}`;
}

export function getNormalizePosition({x,y}: xyPoint): threeVectorPoint {
    return [x - 3.5, 0, y - 3.5];
}

export function getNormPosFromIndex(i: number): threeVectorPoint {
    return getNormalizePosition(getXYPosition(i));
}

export function getPosFromChessCord(chessCord: chessCordType): THREE.Vector3 {
    const [letter, y] = chessCord.split('');
    const x = letters.indexOf(letter);
    return new THREE.Vector3(...getNormalizePosition({ x, y: parseInt(y)-1 }));
}

export interface noralizedBoardSqare extends ChessPiece {
    position: chessCordType
}



export function getNormalizeBoard (chessBoard: ChessBoardType):noralizedBoardSqare[] {
    const normalizeBpard = chessBoard
    .flat()
    .map((element, index) => {
        if(element == null) return element;
        
        (element as noralizedBoardSqare).position = getChessPosition(index);
        return element;
    })
    .filter(element => element != null);
    
    return (normalizeBpard as noralizedBoardSqare[])
}



