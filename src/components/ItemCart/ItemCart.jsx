import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'; 

const ItemCart = () => {
  const { productos } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/cart'); // Navega a la ruta /cart
  };

  return (
    <div>
    <h1>Carrito de Compras</h1>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {productos.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        productos.map((producto, index) => (
          <li key={index} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p><strong>${producto.precio}</strong></p>
          <p>Cantidad: {producto.cantidad}</p>
          <img src={producto.imagen} alt={producto.nombre} style={{ width: '100px', height: 'auto' }} />   
          </li>
        ))
      )}
      {productos.length > 0 && (
        <button onClick={handleCheckout}>Comprar</button>
      )}
    </ul>
  </div>
    );
};

export default ItemCart;
