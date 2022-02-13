import { Container, PromotionButtonTitle } from "./styles";
import {ChessColors, PromotionType} from "../../../../features/game/GameState";
import { useAppSelector } from "../../../../app/hooks";
import { selectGame } from "../../../../features/game/gameSlice";
import PromotionFigure from "./PromotionFigure";
import {useEffect, useState} from "react";

interface PromotionButtonProps {
  type: PromotionType;
  onClick: () => void
}


const figures ={
  'n': "Конь",
  'b': "Слон",
  'r': "Ладья",
  'q': "Ферзь"
}


const PromotionButton = (props:PromotionButtonProps) => {
  
  const [color, setColor] = useState<ChessColors>('w')
  
  const {
    type,
    onClick
  } = props;
  
  const {playerColor} = useAppSelector(selectGame);
  
  useEffect(():any => {
    setColor(playerColor)
    return () => {}
  },[])
  
  return (
    <Container onClick={onClick}>
      <PromotionFigure
        type={type}
        color={color}
      />
      <PromotionButtonTitle>{figures[type]}</PromotionButtonTitle>
    </Container>
  )
}

export default PromotionButton;