import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'



const ItemListContainer = () => {

  const [products, setProducto] = useState([])   
  const {idCategoria} = useParams()
  const navigate = useNavigate();
  

    useEffect(() =>{ 
      if (idCategoria === undefined) {      
     
        fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(json=> setProducto(json))
              .catch(e => console.error(e))
            } 
  
          else{
  
        fetch(`https://fakestoreapi.com/products/category/${idCategoria}`)
              .then(res=>res.json())
              .then(json=> setProducto(json))
              .catch(e => console.error(e))  
  
          }
        
    }, [idCategoria])



  return (
    <>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
      {products.map(product => (
        <li key={product.id} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: 'auto' }} />
            <button onClick={() => navigate(`/item/${product.id}`)} style={{ display: 'block', marginTop: '10px' }}>View Details</button>
          </li>
      ))}
    </ul>
    </>
  )
}

export default ItemListContainer
