import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  remainBullets: number;
  stackingHit: boolean[];
  timeToClear: number;
}

const initialState: InitialState = {
  remainBullets: 30,
  stackingHit: [],
  timeToClear: 0,
};

const gameStatus = createSlice({
  name: "gameStatus",
  initialState: initialState,
  reducers: {
    pullTrigger(state, action: PayloadAction<boolean>) {
      state.remainBullets = state.remainBullets - 1;
      state.stackingHit.push(action.payload);
    },
    clearGameState(state) {
      state.remainBullets = 30;
      state.stackingHit = [];
      state.timeToClear = 0;
    },
    timeTickTock(state) {
      state.timeToClear = state.timeToClear + 1;
    },
  },
});

export const { reducer, actions } = gameStatus;
