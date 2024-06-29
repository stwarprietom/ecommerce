import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/itemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client'; 

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let refConsulta;
        if (idCategoria === undefined) {
          refConsulta = collection(db, 'productos');
        } else {
          refConsulta = query(collection(db, 'productos'), where('categoria', '==', idCategoria));
        }

        const querySnapshot = await getDocs(refConsulta);
        const productosList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(productosList);
      } catch (e) {
        console.error('Error fetching products:', e);
      }
    };

    fetchProducts();
  }, [idCategoria]);

  return <ItemList productos={products} />;
};

export default ItemListContainer;

