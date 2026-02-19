import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "./features/counterSlice";
import counterReducer from "./features/counterSlice";  // 👈 default import

export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})