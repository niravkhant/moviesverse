import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import homeSlice from "./homeSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        home: homeSlice,
    }, // TODO add reducers here.
});
