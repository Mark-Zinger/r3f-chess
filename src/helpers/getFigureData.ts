import { IChessFigure } from '../components/ChessFigures/chessFigure';
import {FigureMeshProps} from "../components/ChessFigures/FigureMesh";
import {ChessColors} from "../features/game/GameState";

export interface IfigureData {
    file: string;
    isBlack: boolean;
}

const figurePaths = {
    p: 'pawn.gltf',
    n: 'knight.gltf',
    b: 'bishop.gltf',
    r: 'rook.gltf',
    q: 'queen.gltf',
    k: 'king.gltf'
};

export const isBlackColor  = (color:ChessColors) =>  color === "b";

const getFigureData = ({ type, color}: FigureMeshProps): IfigureData => {
    const file = figurePaths[type]

    return {
        file,
        isBlack: isBlackColor(color)
    };
};


export default getFigureData;