import {getNormalizeBoard} from "../../helpers/BoardHelpers";
import {boardHashMap} from "../../app/game";
import chess from "../../app/game";
import {IHashedSqare} from "./generateHashedBoardState";
import {Move} from "../../../chess";

function getBoardAfterMove (move: Move) {
  const {from, to} = move;
  const board = getNormalizeBoard( chess.board() );
  const key = boardHashMap.get(from).key;
  const newElement = board.find( el => el.position === to) as IHashedSqare;
  
  newElement.key = key;
  newElement.isDie = false;
  
  const hasExist = boardHashMap.has(to);
  if(hasExist) {
    const prevElement = boardHashMap.get(to);
    boardHashMap.set('will-die', {...prevElement, isDie: true});
  }
  
  boardHashMap.set(to, newElement);
  boardHashMap.delete(from);
  
  castingHandler(move)
  
  return Array.from(boardHashMap.values());
}


function castingHandler( move: Move ) {
  const {san, to } = move;
  
  function moveRockOnHashMap (from: string, to: string) {
    const prevElement = boardHashMap.get(from);
    
    boardHashMap.set(to , {...prevElement, position: to});
    boardHashMap.delete(from);
  }
  
  switch (san+to){
    case 'O-Og1': moveRockOnHashMap( 'h1', 'f1'); break;
    case 'O-Og8':  moveRockOnHashMap( 'h8', 'f8'); break;
    case 'O-O-Oc1': moveRockOnHashMap( 'a1', 'd1'); break;
    case 'O-O-Oc8': moveRockOnHashMap( 'a8', 'd8'); break;
  }
}






export default getBoardAfterMove