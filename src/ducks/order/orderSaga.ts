import { Action } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { orderActions } from "./orderSlice";
import * as API from "../../api";
const {
  getOrder,
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
} = orderActions;

function* fetchOrder(action: Action) {
  try {
    yield put(getOrderStart());
    if (getOrder.match(action)) {
      const orderId: number = action.payload;
      const fetchedData = yield call(API.getOrder, orderId);
      yield put(getOrderSuccess(fetchedData));
    }
  } catch (e) {
    yield put(getOrderFailure(e.message));
  }
}

export function* orderSaga() {
  yield takeLatest(getOrder, fetchOrder);
}
