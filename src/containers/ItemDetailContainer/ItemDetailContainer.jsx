import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

   
    

    useEffect(() => {  
     

      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(respuesta=> {
        if (!respuesta.ok) {
          console.error("error")
        }
        return respuesta.json();
      })

      .then(dato => {
        setProduct(dato);
        setLoading(false);
      })

      
    
      }, [id])

      if (loading) return <p>Loading...</p>;

        

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <img src={product.image} alt={product.title} style={{ width: '200px', height: 'auto' }} />
    </div>
  )
}

export default ItemDetailContainer
