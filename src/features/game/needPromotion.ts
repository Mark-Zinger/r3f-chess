import {Move} from "../../../chess";
import chess from "../../app/game";



function needPromotion ({from, to, promotion}:Move) {
  const move = chess.moves( { verbose: true } ).find( (move: Move) => move.from === from && move.to === to);
  
  return (!!promotion === false) && (!!move.promotion === true )
}

export default needPromotion;