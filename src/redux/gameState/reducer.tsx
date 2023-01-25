import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  remainBullets: number;
  stackingHit: boolean[];
  time: number;
}

const initialState: InitialState = {
  remainBullets: 30,
  stackingHit: [],
  time: 0,
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
      state.time = 0;
    },
    timeTickTock(state) {
      state.time = state.time + 1;
    },
  },
});

export const { reducer, actions } = gameStatus;
