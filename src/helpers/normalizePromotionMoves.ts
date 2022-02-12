import {ChessMove} from "../features/game/GameState";


const normalizePromotionMoves = (moves: ChessMove[]) => {
  const isPromotionMove = moves.find(move => !!move.promotion);
  if(isPromotionMove) {
    const duplicates = new Set();
    const uniqueMoves = moves.filter(
      move => {
        const isUniqueMove = !duplicates.has(move.to)
        duplicates.add(move.to);
        return isUniqueMove
      }
    )
    return uniqueMoves
  }
  
  return moves;
}

export default normalizePromotionMoves;