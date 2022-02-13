import GameState from "../GameState";
import chess from "../../../app/game";
import generateHashedBoardState from "../generateHashedBoardState";

const default_fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

function initSingleGame (fen: string = default_fen):GameState {
  chess.load(fen) || chess.load(default_fen);
  return {
    mode: 'single',
    turn: chess.turn(),
    playerColor: chess.turn(),
    board: generateHashedBoardState(chess.board()),
    promotion: null,
    check: chess.in_check(),
    game_over: chess.game_over(),
    checkmate: chess.in_checkmate(),
    draw: chess.in_draw(),
    stalemate: chess.in_stalemate(),
    threefold_repenition: chess.in_threefold_repetition(),
    insufficient_material: chess.insufficient_material()
  }
}


export default initSingleGame