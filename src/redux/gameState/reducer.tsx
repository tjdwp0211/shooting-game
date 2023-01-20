import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  remainBullets: number;
  stackingHit: boolean[];
}

const initialState: InitialState = {
  remainBullets: 30,
  stackingHit: [],
};

const gameStatus = createSlice({
  name: "gameStatus",
  initialState: initialState,
  reducers: {
    pullTrigger(state, action: PayloadAction<boolean>) {
      state.remainBullets = state.remainBullets - 1;
      state.stackingHit.push(action.payload);
    },
    reloadbullets(state) {
      state.remainBullets = 30;
      state.stackingHit = [];
    },
  },
});

export const { reducer, actions } = gameStatus;
