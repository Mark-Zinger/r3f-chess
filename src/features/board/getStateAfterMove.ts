import {getNormalizeBoard} from "../../helpers/BoardHelpers";
import {boardHashMap} from "../../app/game";
import chess from "../../app/game";

function getStateAfterMove ({from, to}) {
  const board = getNormalizeBoard( chess.board() );
  const key = boardHashMap.get(from).key;
  const newElement = board.find( el => el.position === to);
  
  newElement.key = key;
  newElement.isDie = false;
  
  const hasExist = boardHashMap.has(to);
  if(hasExist) {
    const prevElement = boardHashMap.get(to);
    boardHashMap.set('will-die', {...prevElement, isDie: true});
  }
  
  boardHashMap.set(to, newElement);
  
  boardHashMap.delete(from);
  return Array.from(boardHashMap.values());
}

export default getStateAfterMove