import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context';
import { Product } from './product';

import './shop.css'

export const Shop = () => {
        const { products } = useContext(ShopContext);
        const [ searchTerm, setSearchTerm] = useState('');
        const [ selectedCategory, setSelectedCategory] = useState('');

        const filteredProducts = products.filter((product) => {
          return (
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory ? product.category === selectedCategory: true)
            );
        });
        console.log(filteredProducts);
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1> Pockylee Shop</h1>
        </div>
        <div className="search-bar">
            <input
                type="text"
                placeholder='Search products...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value=''>All Categories</option>
                {[...new Set(products.map(product => product.category))].map(category => (
                        <option key={category} value={category}>{category}</option>
                ))}
            </select>  
        </div>
        <div className="products">
            {/* {products.map((product) => 
            <Product key={product.id} data={product} />)} */}
            {filteredProducts.map((product) => 
            <Product key={product.id} data={product} />)}
        </div>
    </div>
  )
}
