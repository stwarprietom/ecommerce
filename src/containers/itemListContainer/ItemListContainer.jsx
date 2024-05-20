import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nkair97 from '../../assets/img/ImgNike/nikeairmax97seanwotherspoon.jpg'

const ItemListContainer = ({selectSneaker}) => {
  return (
    <div>
       {selectSneaker === "airmax" ? (
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Nkair97} />
        <Card.Body>
          <Card.Title>Nike Air Max 1/97</Card.Title>
          <Card.Text>
          This version of the Sean Wotherspoon Air Max 97/1 comes with extra laces, a dustbag, and "Have a Nike Day" 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    
    )  : ( <h1>Sin Producto</h1> )
    
      }
    
    </div>
  )
}

export default ItemListContainer
