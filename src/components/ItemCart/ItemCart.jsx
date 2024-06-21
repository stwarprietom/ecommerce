import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCart = () => {
  const { productos } = useContext(CartContext);

  return (
    <div>
    <h1>Carrito de Compras</h1>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {productos.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        productos.map((producto, index) => (
          <li key={index} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p><strong>${producto.price}</strong></p>
            <p>Cantidad: {producto.cantidad}</p>
            <img src={producto.image} alt={producto.title} style={{ width: '100px', height: 'auto' }} />
          </li>
        ))
      )}
    </ul>
  </div>
    );
};

export default ItemCart;
