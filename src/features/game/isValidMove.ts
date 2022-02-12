import chess from "../../app/game";
import {Move} from "../../../chess";
import {chessCordType} from "../../helpers/BoardHelpers";
import {ChessColors} from "./GameState";


interface isValidMoveProps {
  from: chessCordType,
  to: chessCordType,
  playerColor: ChessColors
}


function isValidMove ({from , to, playerColor}:isValidMoveProps) {
  
  const moves = chess.moves({ verbose: true } );
  const result = moves.find( (move: Move) => move.from === from && move.to === to);
  
  if(!result || result.color != playerColor) {
    console.log("This Move is not valid");
    return false;
  }
  
  return true;
}




export default isValidMove;