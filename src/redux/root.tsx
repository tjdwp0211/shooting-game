import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  reducer as gameStateReducer,
  actions as gameStateAction,
} from "./gameState/reducer";
import {
  reducer as deviceInfomationReducer,
  actions as deviceInfomationAction,
} from "./deviceInfo/reducer";

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
    deviceInfomation: deviceInfomationReducer,
  },
});

export type Dispatch = typeof store.dispatch;
export const dispatch = () => useDispatch<Dispatch>;
export type Store = ReturnType<typeof store.getState>;
export default store;

const { pullTrigger, clearGameState, timeTickTock } = gameStateAction;
const { deviceSize, isMobile } = deviceInfomationAction;
export { pullTrigger, clearGameState, timeTickTock, deviceSize, isMobile };
