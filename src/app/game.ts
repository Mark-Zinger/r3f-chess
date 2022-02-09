import * as Chess from 'chess.js';

const chess = new Chess();

export const boardHashMap = new Map;

export const getMoves = (square) => {
  return chess.moves({square, verbose: true});
}

window['chess'] = chess
export default chess;

