import {v4 as uuidv4} from 'uuid';
import { boardHashMap } from "../../app/game";
import {getNormalizeBoard, noralizedBoardSqare} from "../../helpers/BoardHelpers";
import {ChessBoardType, ChessPiece} from "../../../chess";


export type HashedBoardType = IHashedSqare[]

export interface IHashedSqare extends noralizedBoardSqare {
  key: string;
  isDie: boolean;
}




function generateHashedBoardState(chessBoard: ChessBoardType):HashedBoardType {
  const board = getNormalizeBoard(chessBoard)

  boardHashMap.clear();
  
  const hashedBoard = board.map((element  )  => {
    const hashedSqare: IHashedSqare = {
      ...element,
      key: uuidv4(),
      isDie: false
    };
    boardHashMap.set(hashedSqare.position, hashedSqare);
    return hashedSqare;
  });
  
  return hashedBoard
}

export default generateHashedBoardState;





