import chess from "../../app/game";


function isValidMove ({from, to}) {
  const moves = chess.moves({ verbose: true } );
  const result = moves.find( move => move.from === from && move.to === to);
  if(!result) console.log("This Move is not valid");
  return !!result;
}

export default isValidMove;