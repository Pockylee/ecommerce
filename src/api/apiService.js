import axios from 'axios';

const BACKEND_URL = 'http://localhost:8080';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/products`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
