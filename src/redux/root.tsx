import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  reducer as gameStateReducer,
  actions as gameStateAction,
} from "./gameState/reducer";
import {
  reducer as deviceSizeReducer,
  actions as deviceSizeAction,
} from "./deviceSize/reducer";

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
    deviceSize: deviceSizeReducer,
  },
});

export type Dispatch = typeof store.dispatch;
export const dispatch = () => useDispatch<Dispatch>;
export type Store = ReturnType<typeof store.getState>;
export default store;

const { pullTrigger, clearGameState, timeTickTock } = gameStateAction;
const { getDeviceSize } = deviceSizeAction;
export { pullTrigger, clearGameState, timeTickTock, getDeviceSize };
