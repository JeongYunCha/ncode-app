import React from "react";
import { Order } from "../Models";

interface Props {
  order: Order;
  children: React.ReactElement;
}

const OrderInfo = ({ order, children }: Props) => {
  return (
    <div>
      <p>주문번호: {order.id}</p>
      <p>주문일: {order.orderAt.toLocaleString()}</p>
      <p>총 결제금액: {order.amount}원</p>
      <div>
        <p className="shipping-title">[배송정보]</p>
        {children}
      </div>
    </div>
  );
};

export default OrderInfo;
