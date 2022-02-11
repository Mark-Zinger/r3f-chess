import {useAppDispatch, useAppSelector} from "../../app/hooks";
import { move } from "../../features/board/boardSlice";
import {selectPromotion, unPromotion} from "../../features/promotionSlice";
import {useCallback} from "react";


function PromotionModal() {
  
  const dispatch = useAppDispatch()
  const {target} = useAppSelector(selectPromotion);
  
  const onClickHandler = useCallback((promotion)=>{
    dispatch(move({...target, promotion}));
    dispatch(unPromotion());
  },[target])
  
  return (
    target ?
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