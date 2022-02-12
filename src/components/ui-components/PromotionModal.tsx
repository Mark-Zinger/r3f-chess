import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {move, selectGame, unPromotion} from "../../features/game/gameSlice";
import {useCallback} from "react";
import {PromotionType} from "../../features/game/GameState";


function PromotionModal() {
  
  const dispatch = useAppDispatch()
  const promotionMove = useAppSelector(selectGame).promotion;
  
  const onClickHandler = useCallback((promotion: PromotionType)=>{
    if(promotionMove) dispatch(move({...promotionMove, promotion}));
    dispatch(unPromotion());
  },[promotionMove])
  
  return (
    promotionMove ?
      <div style={{position: "fixed", top: 0, left:0, zIndex: 2}}>
        <button onClick={ () => onClickHandler('n') }>Конь</button>
        <button onClick={ () => onClickHandler('b') }>Слон</button>
        <button onClick={ () => onClickHandler('r') }>Ладья</button>
        <button onClick={ () => onClickHandler('q') }>Ферзь</button>
      </div>
      : null
  )
}


export default PromotionModal;