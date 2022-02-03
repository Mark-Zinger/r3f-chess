import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Chess from '../../app/game';



const initialState = Chess.board();
console.log({ initialState });



export const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        move: (state, action: PayloadAction<[string, string]>) => {
            const [from, to] = action.payload;
            Chess.move({from, to})
            return Chess.board();
        }
    }
});

export const { move } = BoardSlice.actions;


// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBoard = (state: RootState) => state.board;

export default BoardSlice.reducer;
