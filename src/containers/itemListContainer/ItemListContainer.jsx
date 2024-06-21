import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import ItemList from '../../components/itemList/ItemList'

const ItemListContainer = () => {

  const [products, setProducto] = useState([])   
  const {idCategoria} = useParams()  

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



  return <ItemList productos={products} />
}

export default ItemListContainer
