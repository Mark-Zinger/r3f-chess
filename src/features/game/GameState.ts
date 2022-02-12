import {HashedBoardType} from "./generateHashedBoardState";
import {chessCordType} from "../../helpers/BoardHelpers";

interface GameState {
  mode: GameMode;
  turn: ChessColors
  playerColor: ChessColors;
  board: HashedBoardType | null;
  promotion: { from: chessCordType, to:chessCordType } | null;
}

export type GameMode = 'single' | 'withAI' | 'network' | null;
export type ChessColors = 'w' | 'b' | null;
export type PromotionType = 'n' | 'b' | 'r' | 'q' ;


export type ChessMove = {
  from: chessCordType,
  to: chessCordType,
  promotion?: PromotionType
}

export default GameState