import React from "react";
import { OrderProduct } from "../Models";

interface Props {
  products: OrderProduct[];
}

const OrderProductInfo = ({ products }: Props) => {
  return (
    <ul>
      {products.length > 0 ? (
        products.map((product: OrderProduct, index: number) => (
          <li key={index} className="product">
            <p>상품명: {product.name}</p>
            <p>가격: {product.price}원</p>
            <p>
              주문정보: {product.stock.color}/{product.stock.size}
              <span> {product.stock.quantity}개</span>
            </p>
          </li>
        ))
      ) : (
        <li className="product">상품정보가 없습니다.</li>
      )}
    </ul>
  );
};

export default OrderProductInfo;
