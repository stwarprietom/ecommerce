import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Menu = () => {
    
  return (
 
   <Navbar Navbar expand="lg" className="bg-body-tertiary ms-auto">
      <Container>
      <Link to={'/'}>
        <Navbar.Brand href="#home">Sneakers shop</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          
          <Link to={'/category/electronics'}>
            <Nav.Link href="#link">Electronicos</Nav.Link>
          </Link>
            <Link to={'/category/jewelery'}>
            <Nav.Link href="#link">Joyas</Nav.Link>
            </Link>
            <Link to={'/Contacto'}>
              <Nav.Link href="#link">Contacto</Nav.Link>    
              </Link>   
            <NavDropdown title="Varios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ascis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Puma</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reebok</NavDropdown.Item>  
                   
            </NavDropdown>
          </Nav>          
          <CartWidget/>
         </Navbar.Collapse>
      </Container>
    </Navbar>
);

};

export default Menu;