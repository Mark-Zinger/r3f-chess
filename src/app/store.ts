import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import boardReducer from '../features/board/boardSlice';
import hoverReducer from '../features/hoverSlice';
import selectedReducer from "../features/selectedSlice";

export const store = configureStore({
  reducer: {
      hover: hoverReducer,
      selected: selectedReducer,
      board: boardReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
