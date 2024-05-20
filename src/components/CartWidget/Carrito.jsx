import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CarritoCompra() {
  return (
    <Button variant="primary">
      Carrito <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CarritoCompra;