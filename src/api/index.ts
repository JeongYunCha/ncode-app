import axios from "axios";
import { OrderResponse } from "../Models";

export async function getOrders(orderId: number): Promise<OrderResponse> {
  const url = `http://localhost:4000/orders/${orderId}`;

  try {
    const response = await axios.get<any>(url);
    return response.data;
  } catch (err) {
    console.log(12111, err);
    throw err;
  }
}
