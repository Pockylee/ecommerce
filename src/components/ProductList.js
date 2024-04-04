// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/apiService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getProducts();
            setProducts(productsData); // Set the fetched products to state
        };

        fetchData();
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    {/* Optionally, you can also display the product thumbnail */}
                    {/* <img src={product.thumbnail} alt={product.title} /> */}
                    {/* Add buttons or links for product actions */}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
