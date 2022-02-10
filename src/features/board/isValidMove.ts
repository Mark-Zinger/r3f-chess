import chess from "../../app/game";
import {store} from "../../app/store";
import {setPromotion} from "../promotionSlice";


function isValidMoveAndCheckPromotion ({payload, asyncDispatch}) {
  const {from, to, promotion=false} = payload;
  const moves = chess.moves({ verbose: true } );
  const result = moves.find( move => move.from === from && move.to === to);
  
  if(checkPromotion(promotion, result)) {
    console.log('NeedPromotion');
    asyncDispatch(setPromotion({from, to}));
    return false;
  }
  
  if(!result) console.log("This Move is not valid");
  return !!result;
}


function checkPromotion ( promotion, result) {
  const needPromption = result && !!result.promotion;
  return (!!promotion === false) && (!!needPromption === true )
}

export default isValidMoveAndCheckPromotion;