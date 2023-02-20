import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  reducer as gameStateReducer,
  actions as gameStateAction,
} from "./gameState/reducer";
import {
  reducer as responsiveChartReducer,
  actions as responsiveChartAction,
} from "./responsiveChart/reducer";

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
    responsiveChart: responsiveChartReducer,
  },
});

export type Dispatch = typeof store.dispatch;
export const dispatch = () => useDispatch<Dispatch>;
export type Store = ReturnType<typeof store.getState>;
export default store;

const { pullTrigger, clearGameState, timeTickTock } = gameStateAction;
const { resizing } = responsiveChartAction;
export { pullTrigger, clearGameState, timeTickTock, resizing };
