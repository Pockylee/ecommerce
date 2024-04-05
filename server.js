// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const API_BASE_URL = 'https://dummyjson.com';

app.get('/api/products', async (req, res) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/products`);
    console.log(data.products);
    res.json(data);
  } catch (error) {
    console.error("Error fetching products from DummyJSON:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
