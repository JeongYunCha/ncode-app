import axios from "axios";
import { Order } from "../Models";

export async function getOrder(orderId: number): Promise<Order> {
  const url = `http://localhost:4000/orders/${orderId}`;

  try {
    const response = await axios.get<any>(url);
    return response.data;
  } catch (err) {
    throw err;
  }
}
