export interface BoardState {
    castling: {
        blackLong: boolean;
        blackShort: boolean;
        whiteLong: boolean;
        whiteShort: boolean;
    };
    check: boolean;
    checkMate: boolean;
    enPassant: unknown;
    fullMove: number;
    halfMove: number;
    isFinished: boolean;
    moves: object;
    pieces: Record<string, string>;
    turn: "black" | "white";
}

 