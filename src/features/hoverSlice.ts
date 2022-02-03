import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { chessCordType } from '../helpers/BoardHelpers';
import Chess from '../app/game';


interface IHoverState {
    target: null | chessCordType;
    moves: [] | chessCordType[];
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
            const moves = Chess.moves({ square: action.payload, verbose: true });
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
