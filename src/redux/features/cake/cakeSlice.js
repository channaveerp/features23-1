import { combineReducers, createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfqty: 10,
};

const cakeSlice = createSlice({
  // its function accepts initstate , reducer function ,
  // slice name,& automatically
  // craetes action creator based on reducers & state
  name: "cake",
  initialState,
  reducers: combineReducers({
    ordered: (state) => {
      state.numOfqty--;
    },
    restocked: (state, action) => {
      state.numOfqty += action.payload;
    },
  }),
});
export default cakeSlice;
