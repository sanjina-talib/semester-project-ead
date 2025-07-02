import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // adjust if different

export const placeOrder = async (orderData) => {
  const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
  return response.data;
};
