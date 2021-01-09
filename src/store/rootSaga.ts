import { all, fork } from "redux-saga/effects";
import orderSaga from "../features/order/orderSaga";

export const rootSaga = function* root(): Generator {
  yield all([fork(orderSaga)]);
};
