import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  remainShot: number;
  stackingHit: boolean[];
}

const initialState: InitialState = {
  remainShot: 30,
  stackingHit: [],
};

const gameStatus = createSlice({
  name: "gameStatus",
  initialState: initialState,
  reducers: {
    pullTrigger(state, action: PayloadAction<boolean>) {
      state.remainShot = state.remainShot - 1;
      state.stackingHit.push(action.payload);
    },
  },
});

const { reducer, actions } = gameStatus;
export const { pullTrigger } = actions;
export default reducer;
