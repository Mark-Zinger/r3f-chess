import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { chessCordType } from '../helpers/BoardHelpers';
import { getMoves } from '../app/game';
import { ChessMove } from "./game/GameState";


interface IHoverState {
    target: null | chessCordType;
    moves: [] | ChessMove[];
}

const initialState: IHoverState = {
    target: null,
    moves: []
};

export const HoverSlice = createSlice({
    name: 'hover',
    initialState,
    reducers: {
        setHover: (state, action: PayloadAction<string>) => {
            const moves = getMoves(action.payload);
            state.target = action.payload;
            state.moves = moves;
            return state; 
        },
        unHover: () => initialState
    }
});

export const { setHover, unHover } = HoverSlice.actions;

export const selectHover = (state: RootState) => state.hover;

export default HoverSlice.reducer;
