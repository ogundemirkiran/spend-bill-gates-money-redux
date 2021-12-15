import { configureStore } from "@reduxjs/toolkit";
import moneySlice, { firstProductData } from "./moneySlice";

export const store = configureStore({
  reducer: {
    money: moneySlice,
  },
});

store.dispatch(firstProductData());
