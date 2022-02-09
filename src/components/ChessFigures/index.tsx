import {useAppSelector} from '../../app/hooks';
import {selectBoard} from '../../features/board/boardSlice';
import {getChessPosition} from '../../helpers/BoardHelpers';
import Figure from './chessFigure';


export default function ChessFigures() {
  
  const board = useAppSelector(selectBoard);
  
  
  return (
    <>
      {board.map(({type, color, position, key, isDie}) => (
        <Figure
          key={key}
          chessPosition={position}
          figureType={type}
          color={color}
          isDie={isDie}
        />
      ))}
    </>
  )
  
}

