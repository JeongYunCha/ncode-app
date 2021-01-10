import { combineReducers } from "@reduxjs/toolkit";
import { order } from "./order";

const rootReducer = combineReducers({
  order: order.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
