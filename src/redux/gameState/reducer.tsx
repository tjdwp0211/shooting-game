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
    pullTrigger(
      state,
      action: PayloadAction<{ distanceDotToDot: number | null }>
    ) {
      state.remainBullets = state.remainBullets - 1;
      const { distanceDotToDot } = action.payload;

      if (distanceDotToDot === null) {
        state.stackingScore.push(0);
      } else if (0 <= distanceDotToDot && distanceDotToDot <= 6.2) {
        state.stackingScore.push(10);
      } else if (6.2 <= distanceDotToDot && distanceDotToDot <= 16) {
        state.stackingScore.push(8);
      } else if (16 <= distanceDotToDot && distanceDotToDot <= 27) {
        state.stackingScore.push(6);
      } else if (27 <= distanceDotToDot && distanceDotToDot <= 36) {
        state.stackingScore.push(4);
      } else if (36 <= distanceDotToDot && distanceDotToDot <= 45) {
        state.stackingScore.push(2);
      }
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
