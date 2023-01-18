import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {},
});

export type Dispatch = typeof store.dispatch;
export const dispatcher = () => useDispatch<Dispatch>();

export type Root = ReturnType<typeof store.getState>;
export default store;
