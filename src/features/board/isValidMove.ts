import chess from "../../app/game";
import {setPromotion} from "../promotionSlice";
import {MovePayloadAction} from "./boardSlice";
import {Move} from "../../../chess";


function isValidMoveAndCheckPromotion ({payload, asyncDispatch}: MovePayloadAction) {
  const {from, to, promotion=false} = payload;
  const moves = chess.moves({ verbose: true } );
  const result = moves.find( (move: Move) => move.from === from && move.to === to);
  
  if(checkPromotion(promotion, result)) {
    console.log('NeedPromotion');
    asyncDispatch(setPromotion({from, to}));
    return false;
  }
  
  if(!result) console.log("This Move is not valid");
  return !!result;
}


function checkPromotion ( promotion: string | boolean, result: Move) {
  const needPromption = result && !!result.promotion;
  return (!!promotion === false) && (!!needPromption === true )
}

export default isValidMoveAndCheckPromotion;