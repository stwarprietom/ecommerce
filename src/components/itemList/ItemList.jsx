import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
  return (
    <Row>
      {productos.map(producto => (
        <Col key={producto.id} md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text><strong>${producto.precio}</strong></Card.Text>
              <Card.Text>{producto.descripcion}</Card.Text>              
              <Link to={`/item/${producto.id}`}>
                <Button variant="primary">Ver Detalles</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;
