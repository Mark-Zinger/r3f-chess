import * as Chess from 'chess.js';


/*
 pormotion example: rnbqkbnr/p1P3pp/8/1p1ppp2/2P5/8/PP2PPPP/RNBQKBNR w KQkq f6 0 6
*/

const chess = new Chess('rnbqkbnr/p1P3pp/8/1p1ppp2/2P5/8/PP2PPPP/RNBQKBNR w KQkq f6 0 6');

export const boardHashMap = new Map();

export const getMoves = (square) => {
  return chess.moves({square, verbose: true});
}

window['chess'] = chess
export default chess;

