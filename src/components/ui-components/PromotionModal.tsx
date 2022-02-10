import {useAppDispatch, useAppSelector} from "../../app/hooks";
import { move } from "../../features/board/boardSlice";
import {selectPromotion} from "../../features/promotionSlice";


function PromotionModal(props) {
  
  const dispatch = useAppDispatch()
  const {target} = useAppSelector(selectPromotion);
  
  
  return (
    target ?
      <div style={{position: "fixed", top: 0, left:0, zIndex: 2}}>
        <button onClick={()=> dispatch(move({...target, promotion: 'n'}))}>Конь</button>
        <button onClick={()=> dispatch(move({...target, promotion: 'b'}))}>Слон</button>
        <button onClick={()=> dispatch(move({...target, promotion: 'r'}))}>Ладья</button>
        <button onClick={()=> dispatch(move({...target, promotion: 'q'}))}>Ферзь</button>
      </div>
      : null
  )
}


export default PromotionModal;