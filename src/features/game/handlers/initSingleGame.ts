import GameState from "../GameState";
import chess from "../../../app/game";
import generateHashedBoardState from "../generateHashedBoardState";



function initSingleGame ():GameState {
  chess.reset()
  return {
    mode: 'single',
    turn: chess.turn(),
    playerColor: chess.turn(),
    board: generateHashedBoardState(chess.board()),
    promotion: null
  }
}


export default initSingleGame