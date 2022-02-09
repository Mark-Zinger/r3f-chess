import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { chessCordType } from '../helpers/BoardHelpers';
import Chess, {getMoves} from '../app/game';


interface ISelectedState {
    target: null | chessCordType;
    moves: [];
}

const initialState: ISelectedState = {
    target: null,
    moves: []
};

export const SelectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        setSelected: (state, action: PayloadAction<string>) => {
            state.target = action.payload;
            state.moves = getMoves(action.payload);
            return state;
        },
        unSelected: () => initialState
    }
});

export const { setSelected, unSelected } = SelectedSlice.actions;

export const selectSelected = (state: RootState) => state.selected;

export default SelectedSlice.reducer;
