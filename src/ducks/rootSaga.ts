import { all, fork } from "redux-saga/effects";
import { orderSaga } from "./order";

export const rootSaga = function* root(): Generator {
  yield all([fork(orderSaga)]);
};
