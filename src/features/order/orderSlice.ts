import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../Models";

interface OrderState {
  order: Order | null;
  loading: boolean;
  error: string | null;
}

const orderInitialState: OrderState = {
  order: null,
  loading: false,
  error: null,
};

const order = createSlice({
  name: "order",
  initialState: orderInitialState,
  reducers: {
    getOrder(state: OrderState): void {
      state.loading = true;
      state.error = null;
    },
    getOrderSuccess(state: OrderState, action: PayloadAction<Order>): void {
      state.order = action.payload;
      state.loading = false;
      state.error = null;
    },
    getOrderFailure(state: OrderState, action: PayloadAction<string>): void {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const getData = createAction<number>("getData");
export const { getOrder, getOrderSuccess, getOrderFailure } = order.actions;
export default order.reducer;
