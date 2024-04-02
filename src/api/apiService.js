import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};


export const searchProducts = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/search?q=${query}`);
        return response.data; // Adjust according to the actual API response structure
    } catch (error) {
        console.error("Error searching products:", error);
        return [];
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${id}`);
        return response.data; // Adjust according to the actual API response structure
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
};