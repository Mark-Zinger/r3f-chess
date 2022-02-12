import {useAppSelector} from '../../app/hooks';
import {selectGame} from '../../features/game/gameSlice';
import Figure from './chessFigure';
import GameState from "../../features/game/GameState";


export default function ChessFigures() {
  
  const { board } = useAppSelector(selectGame);
  
  
  return (
    <>
      {board && board.map(({type, color, position, key, isDie}) => (
        <Figure
          key={key}
          chessPosition={position}
          type={type}
          color={color}
          isDie={isDie}
        />
      ))}
    </>
  )
  
}

