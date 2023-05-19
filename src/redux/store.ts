import { configureStore } from "@reduxjs/toolkit";
import { stocksSlice } from "./slicers";

export default configureStore({
  reducer: {
    stocks: stocksSlice.reducer,
  },
});
