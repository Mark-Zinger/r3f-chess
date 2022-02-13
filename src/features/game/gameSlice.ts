import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import GameState, {ChessMove, GameMode} from './GameState';
import initSingleGame from "./handlers/initSingleGame";
import isValidMove from './isValidMove';
import needPromotion from "./needPromotion";
import chess from "../../app/game";
import getBoardAfterMove from "./getBoardAfterMove";



const initialState: GameState = {
    mode: null,
    turn: null,
    playerColor: null,
    board: null,
    promotion: null
}

export const GameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        initGame: ( _, action: PayloadAction<{mode: GameMode, fen?: string}>) => {
            const { mode, fen } = action.payload
            switch (mode) {
                case 'single': return initSingleGame(fen);
            }
        },
        
        exitGame: () => initialState,
        
        move: (state, action: PayloadAction<ChessMove>) => {
            const { from, to, promotion } = action.payload
            
            if(isValidMove({from , to, playerColor: state.playerColor })) {
                if(needPromotion({from, to, promotion})) {
                    state.promotion = {from , to};
                    return state;
                }
                
                const move = chess.move({ from, to, promotion });
                state.board = getBoardAfterMove(move);
                state.turn = chess.turn();
                
                if(state.mode === 'single') state.playerColor = chess.turn()
            }
            
            return state;
        },
        unPromotion: ( state ) => {
            state.promotion = null;
            return state;
        }
    }
});

export const { move, initGame, exitGame, unPromotion } = GameSlice.actions;


// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGame = (state: RootState) => state.game;

export default GameSlice.reducer;
