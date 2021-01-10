import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { Action } from "@reduxjs/toolkit";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from "react-router";
import { Order, OrderProduct, Shipping } from "../Models";
import { RootState } from "../ducks/rootReducer";
import { orderActions } from "../ducks/order";

export const OrderDetails = () => {
  const { orderId } = useParams<any>();
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
    <>
      <div>{order && renderOrder(order)}</div>
      <div>{error && error}</div>
      <div>{loading && "Loading..."}</div>
    </>
  );
};

const renderOrder = (order: Order) => {
  return (
    <>
      <p>주문번호: {order.id}</p>
      <p>주문일: {order.orderAt.toLocaleString()}</p>
      <p>총 결제금액: {order.amount}원</p>
      {renderShippings(order)}
    </>
  );
};

const renderShippings = ({ shippings }: Order) => {
  return (
    <ul>
      {shippings.map((shipping: Shipping, index: number) => (
        <li key={index}>
          <p>[배송정보 {index + 1}]</p>
          <p>송장번호: {shipping.trackingNumber}</p>
          <p>배송료: {shipping.shippingFee}원</p>
          <p>
            주소: [{shipping.post}] {shipping.address}
          </p>
          <p>메시지: {shipping.message}</p>
          {renderProducts(shipping)}
        </li>
      ))}
    </ul>
  );
};

const renderProducts = ({ products }: Shipping) => {
  return (
    <>
      <p>[상품목록]</p>
      <ul>
        {products.map((product: OrderProduct, index: number) => (
          <li key={index}>
            <p>상품명: {product.name}</p>
            <p>가격: {product.price}원</p>
            <p>
              주문정보: {product.stock.color}/{product.stock.size}
              <span> {product.stock.quantity}개</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
