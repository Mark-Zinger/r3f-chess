import {HashedBoardType} from "./generateHashedBoardState";
import {chessCordType} from "../../helpers/BoardHelpers";

interface GameState {
  mode: GameMode;
  turn: ChessColors
  playerColor: ChessColors;
  board: HashedBoardType | null;
  promotion: { from: chessCordType, to:chessCordType } | null;
  check: boolean;
  game_over: boolean;
  checkmate:boolean;
  draw: boolean;
  stalemate: boolean;
  threefold_repenition: boolean;
  insufficient_material: boolean;
}

export type GameMode = 'single' | 'withAI' | 'network' | null;
export type ChessColors = 'w' | 'b' | null;
export type PromotionType = 'n' | 'b' | 'r' | 'q' ;


export type ChessMove = {
  from: chessCordType,
  to: chessCordType,
  promotion?: PromotionType,
  san?: string
}

export default GameState