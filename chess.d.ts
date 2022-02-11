import * as Chess from 'chess.js';

declare namespace ChessJSTypes {
  type ChessType = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
  
  type ChessColor = 'b' | 'w';
  
}

type ChessBoardType = ChessPiece[][];


interface MoveOptions {
  sloppy: boolean;
}

interface HistoryOptions {
  verbose: boolean;
}

interface MovesOptions {
  legal?: boolean;
  square?: string;
  verbose?: boolean;
}

interface PgnOptions {
  sloppy?: boolean;
  max_width?: number;
  newline_char?: string;
}

interface IFlags {
  NORMAL: string;
  CAPTURE: string;
  BIG_PAWN: string;
  EP_CAPTURE: string;
  PROMOTION: string;
  KSIDE_CASTLE: string;
  QSIDE_CASTLE: string;
}

interface Move {
  to: string;
  from: string;
  san?: string;
  flags?: string;
  piece?: string;
  color?: string;
  captured?: string;
  promotion?: string;
}

interface ValidationObject {
  error: string;
  valid: boolean;
  error_number: number;
}

interface ChessPiece {
  type: ChessJSTypes.ChessType;
  color: ChessJSTypes.ChessColor;
}

declare module 'chess.js' {
  class Chess {
    readonly PAWN: string;
    readonly KNIGHT: string;
    readonly BISHOP: string;
    readonly ROOK: string;
    readonly QUEEN: string;
    readonly KING: string;
    readonly BLACK: string;
    readonly WHITE: string;
    readonly FLAGS: IFlags;
    
    constructor(fen: string);
    constructor();
    
    board(): ChessBoardType;
    
    load(fen: string): boolean;
    
    reset(): void;
    
    moves(options?: MovesOptions): string[] | Move[];
    
    in_check(): boolean;
    
    in_checkmate(): boolean;
    
    in_stalemate(): boolean;
    
    in_draw(): boolean;
    
    insufficient_material(): boolean;
    
    in_threefold_repetition(): boolean;
    
    game_over(): boolean;
    
    validate_fen(fen: string): ValidationObject;
    
    fen(): string;
    
    pgn(option?: PgnOptions): string;
    
    load_pgn(pgn: string, options?: PgnOptions): boolean;
    
    header(args?: any): void;
    header(): any;
    
    ascii(): string;
    
    turn(): ChessJSTypes.ChessColor
    
    move(move: string | Move, options?: MoveOptions): Move;
    
    undo(): Move;
    
    clear(): void;
    
    put(piece: ChessPiece, square: string): boolean;
    
    get(square: string): ChessPiece;
    
    remove(square: string): ChessPiece;
    
    perft(depth: number): number;
    
    square_color(square: string): string;
    
    history(options: HistoryOptions): Move[];
    history(): string[];
  }
}