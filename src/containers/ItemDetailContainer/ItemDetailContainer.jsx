import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; 
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from '../../firebase/client'


const ItemDetailContainer = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext); 
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const productoRef = doc(db, 'productos', id);
        const productoSnap = await getDoc(productoRef);

        if (productoSnap.exists()) {
          setProducto({ id: productoSnap.id, ...productoSnap.data() });
        } else {
          console.log('El producto no existe');
        }
      } catch (error) {
        console.error('Error obteniendo el producto:', error);
      }
    };

    obtenerProducto();
  }, [id]);

  const handleAgregarAlCarrito = () => {
    if (producto) {
      agregarAlCarrito(producto); 
    }
  };

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '170px', height: 'auto' }} />
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <p>Descripción: {producto.descripcion}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
