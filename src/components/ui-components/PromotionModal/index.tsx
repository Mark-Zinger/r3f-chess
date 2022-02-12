import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {move, selectGame, unPromotion} from "../../../features/game/gameSlice";
import { useCallback } from "react";
import {PromotionType} from "../../../features/game/GameState";
import Modal from "../Modal";
import PromotionButton from "./PromotionButton";
import {Container, Title } from "./styles";


function Index() {
  
  const dispatch = useAppDispatch()
  const promotionMove = useAppSelector(selectGame).promotion;
  
  const onClickHandler = useCallback((promotion: PromotionType) => {
    if (promotionMove) dispatch(move({...promotionMove, promotion}));
    dispatch(unPromotion());
  }, [promotionMove])
  
  return (
    <Modal isOpen={!!promotionMove} closeOnEscape={false}>
      <Container>
        <Title>Выберите фигуру</Title>
        <PromotionButton onClick={() => onClickHandler('q')} type='q'/>
        <PromotionButton onClick={() => onClickHandler('r')} type='r'/>
        <PromotionButton onClick={() => onClickHandler('b')} type='b'/>
        <PromotionButton onClick={() => onClickHandler('n')} type='n'/>

      </Container>
    </Modal>
  )
}


export default Index;