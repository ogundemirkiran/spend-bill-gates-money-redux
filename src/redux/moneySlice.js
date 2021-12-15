import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData.json";

export const firstProductData = createAsyncThunk(
  "money/getProductData",
  async () => {
    return await ProductData.map((res) => res);
  }
);

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    items: [],
    data: [],
    finalMoney: "",
  },
  reducers: {
    inputChangeProduct: (state, action) => {
      state.data = action.payload;
    },

    totalMoneyChange: (state, action) => {
      state.items = action.payload;
    },

    totalUnusedMoneyDis: (state, action) => {
      state.finalMoney = action.payload;
    },
  },
  extraReducers: {
    [firstProductData.pending]: (state, action) => {
      console.log(action.payload);
    },
    [firstProductData.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
    [firstProductData.rejected]: (state, action) => {
      console.log(action.error.message);
    },
  },
});

export const { inputChangeProduct, totalMoneyChange, totalUnusedMoneyDis } =
  moneySlice.actions;

export const itemsSelector = (state) => state.money.items;
export const dataSelector = (state) => state.money.data;
export const finalMoneySelector = (state) => state.money.finalMoney;

export default moneySlice.reducer;
