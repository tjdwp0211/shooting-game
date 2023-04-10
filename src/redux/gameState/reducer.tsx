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
    pullTrigger(state, action: PayloadAction<{ x: number; y: number } | null>) {
      state.remainBullets = state.remainBullets - 1;

      const { x: calcedX, y: calcedY } = action.payload;
      const validateTarget = calcedX > calcedY ? calcedX : calcedY;

      if (calcedX === null && calcedY === null) state.stackingScore.push(0);
      else if (0 <= validateTarget && validateTarget <= 5)
        state.stackingScore.push(10);
      else if (6 <= validateTarget && validateTarget <= 13)
        state.stackingScore.push(8);
      else if (14 <= validateTarget && validateTarget <= 24)
        state.stackingScore.push(6);
      else if (25 <= validateTarget && validateTarget <= 35)
        state.stackingScore.push(4);
      else if (36 <= validateTarget && validateTarget <= 44)
        state.stackingScore.push(2);
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
