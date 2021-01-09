import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from "react-router";
import { Order, Shipping } from "../../Models";
import { RootState } from "../../store/rootReducer";
import { getData } from "./orderSlice";

export const OrderDetailPage = () => {
  const { orderId } = useParams<any>();
  const { order, error, loading } = useSelector((state: RootState) => {
    return {
      order: state.order.order,
      error: state.order.error,
      loading: state.order.loading,
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(getData(Number(orderId)));
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
      <p>주문일: {order.orderAt}</p>
      <p>총 결제금액: {order.amount}원</p>
      {renderShippings(order)}
    </>
  );
};

const renderShippings = ({ shippings }: Order) => {
  return (
    <>
      {shippings.map((shipping, index) => (
        <div key={index}>
          <p>[배송정보]</p>
          <p>송장번호: {shipping.trackingNumber}</p>
          <p>배송료: {shipping.shippingFee}원</p>
          <p>
            주소: [{shipping.post}] {shipping.address}
          </p>
          <p>메시지: {shipping.message}</p>
          {renderProducts(shipping)}
        </div>
      ))}
    </>
  );
};

const renderProducts = ({ products }: Shipping) => {
  return (
    <>
      <p>[상품목록]</p>
      {products.map((product, index) => (
        <div key={index}>
          <p>상품명: {product.name}</p>
          <p>가격: {product.price}원</p>
          <p>
            주문정보: {product.stock.color}/{product.stock.size}
            <span> {product.stock.quantity}개</span>
          </p>
        </div>
      ))}
    </>
  );
};
