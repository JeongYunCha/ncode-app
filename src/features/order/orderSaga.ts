import { Action } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getData, getOrderSuccess, getOrderFailure } from "./orderSlice";
import * as API from "../../api";

function* fetchUser(action: Action) {
  try {
    if (getData.match(action)) {
      const orderId = action.payload;
      const fetchedUser = yield call(API.getOrders, orderId);
      yield put(getOrderSuccess(fetchedUser));
    }
  } catch (e) {
    yield put(getOrderFailure(e.message));
  }
}

function* orderSaga() {
  yield takeLatest(getData.type, fetchUser);
}

export default orderSaga;
