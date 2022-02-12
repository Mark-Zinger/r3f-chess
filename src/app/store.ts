import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import gameReducer from '../features/game/gameSlice';
import hoverReducer from '../features/hoverSlice';
import selectedReducer from "../features/selectedSlice";


export const store = configureStore({
  reducer: {
    hover: hoverReducer,
    selected: selectedReducer,
    game: gameReducer
  },
});

export type storeType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
