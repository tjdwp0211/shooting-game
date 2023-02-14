import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  remainBullets: number;
  stackingScore: number[];
  timeToClear: number;
}

const initialState: InitialState = {
  remainBullets: 30,
  stackingScore: [],
  timeToClear: 0,
};

const gameStatus = createSlice({
  name: "gameStatus",
  initialState: initialState,
  reducers: {
    pullTrigger(state, action: PayloadAction<number>) {
      state.remainBullets = state.remainBullets - 1;
      state.stackingScore.push(action.payload);
    },
    clearGameState(state) {
      state.remainBullets = 30;
      state.stackingScore = [];
      state.timeToClear = 0;
    },
    timeTickTock(state) {
      state.timeToClear = state.timeToClear + 1;
    },
  },
});

export const { reducer, actions } = gameStatus;
