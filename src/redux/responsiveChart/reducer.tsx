import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  fontSize: number;
  chartLength: number;
}

const initialState: InitialState = {
  fontSize: 0,
  chartLength: 0,
};

const responsiveChart = createSlice({
  name: "responsiveChart",
  initialState: initialState,
  reducers: {
    resizing(state, action: PayloadAction<InitialState>) {
      state.fontSize = action.payload.fontSize;
      state.chartLength = action.payload.chartLength;
    },
  },
});

export const { reducer, actions } = responsiveChart;
