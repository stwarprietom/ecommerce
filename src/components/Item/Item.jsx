import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '100px', height: 'auto' }} />
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <Link to={`/item/${producto.id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  );
};

export default Item;
