import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Chess from '../../app/game';
import generateHashedBoardState, { HashedBoardType } from "./generateHashedBoardState";
import getStateAfterMove from "./getStateAfterMove";
import isValidMoveAndCheckPromotion from "./isValidMove";
import {asyncDispatchType} from "../../middleware/asyncDispatchMiddleware";



const initialState: HashedBoardType = generateHashedBoardState( Chess.board() );

export interface MovePayloadAction {
    asyncDispatch: asyncDispatchType;
    payload : {from: string, to: string, promotion?: string};
}


export const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        move: (state, action: any) => {
            if(isValidMoveAndCheckPromotion(action)) {
                const move = Chess.move(action.payload);
                return getStateAfterMove(move);
            }
            
            return state;
        }
    }
});

export const { move } = BoardSlice.actions;


// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBoard = (state: RootState) => state.board;

export default BoardSlice.reducer;
