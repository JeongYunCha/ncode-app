import axios from "axios";

export async function getOrder(orderId: number): Promise<any> {
  const url = `http://localhost:4000/orders/${orderId}`;

  try {
    const response = await axios.get<any>(url);
    return response.data;
  } catch (err) {
    throw err;
  }
}
