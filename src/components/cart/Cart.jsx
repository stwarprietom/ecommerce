import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/client';
import { collection, addDoc } from 'firebase/firestore';
import { Modal, Button } from 'react-bootstrap';

const Cart = () => {
  const { productos, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const handleConfirmPurchase = async () => {
    if (!nombre || !documento || !direccion) {
      alert('Complete todos los datos ');
      return;
    }

    const orden = {
      comprador: { nombre, documento, direccion },
      items: productos,
      total: productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0),
      fecha: new Date().toISOString()
    };

    try {
      const docRef = await addDoc(collection(db, 'ordenes'), orden);
      setOrderId(docRef.id);
      setTotalAmount(orden.total);
      setShowModal(true);
    } catch (e) {
      console.error('Error al guardar la orden: ', e);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    vaciarCarrito(); // Reiniciar el carrito
  };

  return (
    <div>
      <h1>Información de compra</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {productos.map((producto, index) => (
          <li key={index} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p><strong>${producto.precio}</strong></p>
            <p>Cantidad: {producto.cantidad}</p>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: '100px', height: 'auto' }} />
          </li>
        ))}
      </ul>
      <h2>Información del Comprador</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Documento:</label>
          <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        </div>
      </form>
      <button onClick={handleConfirmPurchase}>Confirmar Compra</button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Compra Confirmada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¡Gracias por tu compra  {nombre}!</p>
          <p>ID de la Orden: {orderId}</p>
          <p>Total: ${totalAmount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
