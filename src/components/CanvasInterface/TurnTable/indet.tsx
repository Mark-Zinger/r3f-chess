import styled, {css} from "styled-components";
import {useAppSelector} from "../../../app/hooks";
import {selectGame} from "../../../features/game/gameSlice";


const TurnTable = () => {
  
  const { turn } = useAppSelector(selectGame);
  
  const word = {
    'b': 'чёрные',
    'w': 'белые'
  }
  
  return <TurnTitle> {word[turn as keyof typeof word]} фигуры ходят </TurnTitle>
}




const TurnTitle = styled.h5(
  ({theme}) => css`
    position: absolute;
    left: 50%; top: 3px;
    text-transform: uppercase;
    transform: translateX(-50%);
  `
)

export default TurnTable
