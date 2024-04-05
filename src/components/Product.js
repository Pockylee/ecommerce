// src/components/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
};

export default Product;
