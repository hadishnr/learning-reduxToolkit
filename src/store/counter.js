import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //here we allowed to manipulate the existing state because redux toolkit use immer to handle this
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //here we need payload
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
}); //accept object of reducer function, a slice name, and an initial state value, and automatically generate a slice reducer with corresponding action creators and action types
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
