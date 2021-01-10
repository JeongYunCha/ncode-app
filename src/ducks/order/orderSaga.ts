import { Action } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { orderActions } from "./orderSlice";
import * as API from "../../api";
import { Order } from "../../Models";
const {
  getOrder,
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
} = orderActions;

function parseOrder(json: any) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        const order: Order = {
          id: json.id,
          orderAt: new Date(json.orderAt),
          amount: json.amount,
          shippings: json.shippings,
        };
        resolve(order);
      } catch (error) {
        reject(Error(error.message));
      }
    }, 3000);
  });
}

function* fetchOrder(action: Action) {
  try {
    if (getOrder.match(action)) {
      yield put(getOrderStart());
      const orderId: number = action.payload;
      const json: any = yield call(API.getOrder, orderId);
      const order: Order = yield call(parseOrder, json);
      yield put(getOrderSuccess(order));
    }
  } catch (e) {
    yield put(getOrderFailure(e.message));
  }
}

export function* orderSaga() {
  yield takeLatest(getOrder, fetchOrder);
}
