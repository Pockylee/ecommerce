// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/apiService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchData();
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    {/* Display other product details here */}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
