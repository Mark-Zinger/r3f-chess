import styled, {css} from "styled-components";
import {useAppSelector} from "../../../app/hooks";
import {selectGame} from "../../../features/game/gameSlice";
import GameState from "../../../features/game/GameState";


const StatusBar = () => {
  
  const game = useAppSelector(selectGame);
  const { turn, game_over } = game;
  
  const word = {
    'b': 'чёрные',
    'w': 'белые'
  }
  
  return (
    <>{ game_over
        ? <TurnTitle> { getGameOverTitle(game) } </TurnTitle>
        : <TurnTitle> {word[turn as keyof typeof word]} фигуры ходят </TurnTitle>
    }</>
  )
}


const getGameOverTitle = (game:GameState):string => {
  const game_over = 'игра окончена'
  const { turn, checkmate, draw, stalemate, threefold_repenition, insufficient_material } = game;
  switch (true) {
    case checkmate:
      return `${game_over}: ${turn === 'b'? 'Белые' : 'Чёрные'} выиграли, шах и мат.`;
    case draw:
      return `${game_over}: По правилу 50 ходов была объявлена ничья.`;
    case stalemate:
      return `${game_over}: Достигнута патовая ситуация, объявлена ничья.`;
    case threefold_repenition:
      return `${game_over}: Троекратное повторение позиции, объявлена ничья.`;
    case insufficient_material:
      return `${game_over}: Невозможно поставить мат, объявлена ничья.`;
    default:
      return game_over;
  }
}

const TurnTitle = styled.h5(
  ({theme}) => css`
    position: absolute;
    left: 50%; top: 3px;
    text-transform: uppercase;
    transform: translateX(-50%);
  `
)

export default StatusBar
