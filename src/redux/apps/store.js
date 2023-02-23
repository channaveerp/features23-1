import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice"; /*importing reducers */

const store = configureStore({
  reducer: { cake: cakeSlice },
});

export default store;
