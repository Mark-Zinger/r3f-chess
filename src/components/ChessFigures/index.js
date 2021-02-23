
import React, { useRef } from 'react'
import Bishop from './Bishop';
import King from './King';
import Knight from './Knight';
import Pawn from './Pawn';
import Queen from './Queen';
import Rook from './Rook';
import { sqarePositions } from '../../Game';

const GetFigureForType = ({type, ...ownProps}) => {
  // r n b q k
  switch(type) {
    case  'b': return <Bishop {...ownProps}/>;
    case  'k': return <King {...ownProps}/>;
    case  'n': return <Knight {...ownProps}/>;
    case  'p': return <Pawn {...ownProps}/>;
    case  'q': return <Queen {...ownProps}/>;
    case  'r': return <Rook {...ownProps}/>;

  }
}

export default function ChessFigures({board}) {
  
  console.log(sqarePositions)
  // console.log(board.flat());

  return (
    <group>
      {
        board.flat().map((el, i) => (
          el && 
            <GetFigureForType 
              type={el.type}
              color={el.color}
              position={Object.values(sqarePositions[i])} 
              key={i}
            />
        ))
      }
    </group>
  )
}

