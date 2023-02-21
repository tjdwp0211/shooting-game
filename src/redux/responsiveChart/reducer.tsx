import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  fontSize: number;
}

const initialState: InitialState = {
  fontSize: 0,
};

const responsiveChart = createSlice({
  name: "responsiveChart",
  initialState: initialState,
  reducers: {
    resizing(state, action: PayloadAction<number>) {
      state.fontSize = action.payload;
    },
  },
});

export const { reducer, actions } = responsiveChart;
