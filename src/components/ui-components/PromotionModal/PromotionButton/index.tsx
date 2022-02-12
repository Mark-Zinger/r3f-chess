import { Container } from "./styles";
import {PromotionType} from "../../../../features/game/GameState";

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
  
  const {
    type,
    onClick
  } = props;
  
  
  return (
    <Container onClick={onClick}>
      {figures[type]}
    </Container>
  )
}

export default PromotionButton;