
import React, { useRef, Suspense, useEffect, useMemo, memo } from 'react';
import * as THREE from 'three';
import BoardSquare from './BoardSquare'
import { getBoard } from './Game'

const BlackColor = '#000';
const WhiteColor = '#fff';
const size = 1;

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


  return (
    <>
      {
        new Array(64).fill('')
        .map((_, i) => 
          <BoardSquare 
            key={i} 
            isBlack={isBlack(i)}
            chessPosition={getPosition(i)}
            XYPosition={getXYPosition(i)}
          />
        )
      }
    </>
  )
})

export default Board;