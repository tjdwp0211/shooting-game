import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  deviceWidth: number;
  deviceHeight: number;
  isMobile: boolean;
}

const initialState: InitialState = {
  deviceWidth: 0,
  deviceHeight: 0,
  isMobile: null,
};

const deviceInfomation = createSlice({
  name: "deviceSize",
  initialState: initialState,
  reducers: {
    deviceSize(
      state,
      action: PayloadAction<Pick<InitialState, "deviceWidth" | "deviceHeight">>
    ) {
      state.deviceWidth = action.payload.deviceWidth;
      state.deviceHeight = action.payload.deviceHeight;
    },
    isMobile(state, action: PayloadAction<Pick<InitialState, "isMobile">>) {
      state.isMobile = action.payload.isMobile;
    },
  },
});

export const { reducer, actions } = deviceInfomation;
