// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/apiService';
import Product from './Product';



const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getProducts();
            console.log(productsData);
            setProducts(productsData); // Set the fetched products to state
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProductList;
