import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import boardReducer from '../features/board/boardSlice';
import hoverReducer from '../features/hoverSlice';
import selectedReducer from "../features/selectedSlice";
import promotionReducer from "../features/promotionSlice";
import asyncDispatchMiddleware from "../middleware/asyncDispatchMiddleware";

export const store = configureStore({
  reducer: {
    hover: hoverReducer,
    selected: selectedReducer,
    promotion: promotionReducer,
    board: boardReducer
  },
  middleware: [asyncDispatchMiddleware]
});

export type storeType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
