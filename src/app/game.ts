import {chessCordType} from "../helpers/BoardHelpers";

const  Chess = require('chess.js')


/*
 pormotion example: rnbqkbnr/p1P3pp/8/1p1ppp2/2P5/8/PP2PPPP/RNBQKBNR w KQkq f6 0 6
*/

const chess = new Chess();

export const boardHashMap = new Map();

export const getMoves = (square: chessCordType) => {
  return chess.moves({square, verbose: true});
}

//@ts-ignore
window['chess'] = chess; window['hashMap'] = boardHashMap; // need to debug

export default chess;

