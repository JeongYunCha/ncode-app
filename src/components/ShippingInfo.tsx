import React from "react";
import { Shipping } from "../Models";
import OrderProductInfo from "./OrderProductInfo";

interface Props {
  shippings: Shipping[];
}

const ShippingInfo = ({ shippings }: Props) => {
  return (
    <ul className="shipping-container">
      {shippings.length > 0 ? (
        shippings.map((shipping) => (
          <li className="shipping">
            <p>송장번호: {shipping.trackingNumber}</p>
            <p>배송료: {shipping.shippingFee}원</p>
            <p>
              주소: [{shipping.post}] {shipping.address}
            </p>
            <p>메시지: {shipping.message}</p>
            <div>
              <p className="product-title">[상품목록]</p>
              <OrderProductInfo products={shipping.products} />
            </div>
          </li>
        ))
      ) : (
        <li>배송정보가 없습니다.</li>
      )}
    </ul>
  );
};

export default ShippingInfo;
