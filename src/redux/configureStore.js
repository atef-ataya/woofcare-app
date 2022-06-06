import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import Slice from "./slice";

// create the saga middleware
let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  // reducers go here
  reducer: {
    testSlice: Slice,
  },
  // set redux saga as middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);
