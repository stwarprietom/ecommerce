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
          
          <Link to={'/category/adidas'}>
            <Nav.Link href="#link">Adidas</Nav.Link>
          </Link>
            <Link to={'/category/nike'}>
            <Nav.Link href="#link">Nike</Nav.Link>
            </Link>
            
            <NavDropdown title="Varios" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/category/ascis">Ascis</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/puma">Puma</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/reebok">Reebok</NavDropdown.Item>
          </NavDropdown>
            <Link to={'/Contacto'}>
            <Nav.Link href="#link">Contacto</Nav.Link>    
            </Link>  
          </Nav>          
          <CartWidget/>
         </Navbar.Collapse>
      </Container>
    </Navbar>
);

};

export default Menu;