
import { useAppSelector } from '../../app/hooks';
import { selectBoard } from '../../features/board/boardSlice';
import { getChessPosition } from '../../helpers/BoardHelpers';
import Figure from './chessFigure';


export default function ChessFigures() {
  
  const board = useAppSelector(selectBoard);

  console.log(board.flat());

  return (
    <>
        {board.flat().map((el, i) => (
            el ?
                <Figure
                    key={i}
                    chessPosition={getChessPosition(i)}
                    figureType={el.type}
                    color={el.color}
                />
            : null
        ))}
    </>
  )

}

