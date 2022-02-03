import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { BoardState } from './BoardStateInterface';
import { v4 } from 'uuid';
const jsChessEngine = require('js-chess-engine/dist/js-chess-engine');



const initialState: BoardState = new jsChessEngine.Game().exportJson();
console.log({ initialState });

export const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setBoard: (state, action: PayloadAction<BoardState>) => {
            
            
            return action.payload
        }
    }
});

export const { setBoard } = BoardSlice.actions;

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBoard = (state: RootState) => state.board;

export default BoardSlice.reducer;
