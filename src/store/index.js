import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //here we can just pass one reducer like the counterSlice reducer, or we pass object of reducer with key
}); //we pass object here

export default store;
