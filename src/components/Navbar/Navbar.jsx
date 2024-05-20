import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoCompra from '../CartWidget/Carrito';

const Menu = () => {
    
  return (
 
   <Navbar Navbar expand="lg" className="bg-body-tertiary ms-auto">
      <Container>
        <Navbar.Brand href="#home">Sneakers shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Adidas</Nav.Link>
            <Nav.Link href="#link">Nike</Nav.Link>
            <NavDropdown title="Varios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ascis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Puma</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reebok</NavDropdown.Item>              
            </NavDropdown>
          </Nav>
          <CarritoCompra/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
);

};

export default Menu;