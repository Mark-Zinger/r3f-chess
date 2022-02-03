import { memo } from 'react';
import BoardSquare from './BoardSqure';


import { getNormPosFromIndex, isBlack, getChessPosition } from '../helpers/BoardHelpers';


const Board = memo(() => {
  return (
      <>
          {new Array(64).fill('').map((_, i) => (
              <BoardSquare
                  key={i}
                  isBlack={isBlack(i)}
                  chessPosition={getChessPosition(i)}
                  position={getNormPosFromIndex(i)}
              />
          ))}
      </>
  );
});

export default Board;
