import { createSlice } from "@reduxjs/toolkit";

export const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    allStocks: [],
  },
  reducers: {
    setAllStocks: (state, action) => {
      state.allStocks = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllStocks } = stocksSlice.actions;
