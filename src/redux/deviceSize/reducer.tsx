import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  deviceWidth: number;
  deviceHeight: number;
}

const initialState: InitialState = {
  deviceWidth: 0,
  deviceHeight: 0,
};

const deviceSize = createSlice({
  name: "deviceSize",
  initialState: initialState,
  reducers: {
    getDeviceSize(state, action: PayloadAction<InitialState>) {
      state.deviceWidth = action.payload.deviceWidth;
      state.deviceHeight = action.payload.deviceHeight;
    },
  },
});

export const { reducer, actions } = deviceSize;
