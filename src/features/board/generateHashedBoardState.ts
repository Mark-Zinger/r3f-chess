import {v4 as uuidv4} from 'uuid';
import { boardHashMap } from "../../app/game";
import {getNormalizeBoard} from "../../helpers/BoardHelpers";




function generateHashedBoardState(chessBoard) {
  const board = getNormalizeBoard(chessBoard)
  console.log(board)
  boardHashMap.clear();
  
  board.map(element => {
    element.key = uuidv4()
    element.isDie = false;
    boardHashMap.set(element.position, element);
    return element;
  });
  
  return board
}

export default generateHashedBoardState;





