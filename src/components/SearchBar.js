
export const searchProducts = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/search?q=${query}`);
        return response.data.products;
    } catch (error) {
        console.error("Error searching products:", error);
        return [];
    }
};
