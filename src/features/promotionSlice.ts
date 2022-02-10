import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { chessCordType } from '../helpers/BoardHelpers';



type targetType = { from: chessCordType, to:chessCordType };

interface IPromotionState {
    target: null | targetType;
}

const initialState: IPromotionState = {
    target: null,
};

export const PromotionSlice = createSlice({
    name: 'promotion',
    initialState,
    reducers: {
        setPromotion: (state, action: PayloadAction<targetType>) => {
            console.log(action.payload)
            state.target = action.payload;
            return state;
        },
        unPromotion: () => initialState
    }
});

export const { setPromotion, unPromotion } = PromotionSlice.actions;

export const selectPromotion = (state: RootState) => state.promotion;

export default PromotionSlice.reducer;
