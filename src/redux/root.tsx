import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import gameStateReducer from "./gameState/reducer";

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
  },
});

export type Dispatch = typeof store.dispatch;
export const dispatch = () => useDispatch<Dispatch>();

export type RootStore = ReturnType<typeof store.getState>;
export default store;
