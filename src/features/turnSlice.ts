import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import chess from '../app/game';


interface IturnState {
    value: 'b' | 'w';
}

const initialState: IturnState = {
    value: chess.turn()
};

export const TurnSlice = createSlice({
    name: 'turn',
    initialState,
    reducers: {
        updateTurn: (state) => {
            state.value = chess.turn();
            return state;
        },
    }
});

export const { updateTurn } = TurnSlice.actions;

export const selectTurn = (state: RootState) => state.turn;

export default TurnSlice.reducer;
