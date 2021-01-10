import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { Action } from "@reduxjs/toolkit";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../ducks/rootReducer";
import { orderActions } from "../ducks/order";
import OrderInfo from "../components/OrderInfo";
import ShippingInfo from "../components/ShippingInfo";

interface ParamTypes {
  orderId: string;
}

const OrderDetails = () => {
  const { orderId } = useParams<ParamTypes>();
  console.log(typeof orderId);
  const { order, error, loading } = useSelector((state: RootState) => {
    return {
      order: state.order.order,
      error: state.order.error,
      loading: state.order.loading,
    };
  }, shallowEqual);

  const dispatch: Dispatch<Action> = useDispatch();

  useEffect((): void => {
    dispatch(orderActions.getOrder(Number(orderId)));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading
        ? "Loading..."
        : order && (
            <OrderInfo order={order}>
              <ShippingInfo shippings={order.shippings} />
            </OrderInfo>
          )}
      {error && <p>error</p>}
    </div>
  );
};
export default OrderDetails;
