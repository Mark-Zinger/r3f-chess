
import React, { useRef } from 'react'
import * as THREE from 'three';
import { useAppSelector } from '../../app/hooks';
import { selectBoard } from '../../features/board/boardSlice';
import Figure from './chessFigure';


export default function ChessFigures() {
  
  const { pieces } = useAppSelector(selectBoard);

  console.log(pieces);

  return (
    <>
    { Object.keys(pieces)
      .map(el => <Figure key={el} chessPosition={el} figureType={pieces[el]}/>)
    }
    </>
  )
}

