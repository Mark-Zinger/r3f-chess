import React, { useRef, Suspense, useEffect, useMemo, memo, useState } from 'react';
import * as THREE from 'three';
import BoardSquare from '../BoardSqure';
import { getBoard } from '../../Game';
import ChessFigures from '../ChessFigures/index'

function getXYPosition(i) {
  const x = i % 8;
  const y = Math.abs(Math.floor(i / 8) - 7);
  return { x, y }
}

function isBlack(i) {
  const { x, y } = getXYPosition(i)
  return (x + y) % 2 === 1
}

function getPosition(i) {
  const { x, y } = getXYPosition(i)
  const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][x]
  return `${letter}${y + 1}`
}

const Board =  memo((props) => {
  console.log(getBoard());

  const [squaresPosition, setSquaresPosition ] = useState({});

  return (
    <>
      <axesHelper args={[3]}/>
      <gridHelper args={[8,16]}/>
      <Suspense fallback={null}>
        <ChessFigures 
          {...{squaresPosition, board: getBoard()}}
        />
      </Suspense>
      {
        new Array(64).fill('')
        .map((_, i) => 
          <BoardSquare 
            key={i} 
            isBlack={isBlack(i)}
            chessPosition={getPosition(i)}
            XYPosition={getXYPosition(i)}
            {...{setSquaresPosition}}
          />
        )
      }
    </>
  )
})

export default Board;