import React from 'react';
import {useNavigate} from 'react-router-dom'


const ProductList = ({ productos }) => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Product List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {productos.map(product => (
          <li key={product.id} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: 'auto' }} />
            <button onClick={() => navigate(`/item/${product.id}`)} style={{ display: 'block', marginTop: '10px' }}>View Details</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
