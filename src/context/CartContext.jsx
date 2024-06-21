import { useState } from "react";
import { createContext, useEffect } from "react";

export const CartContext = createContext()




export const ShopComponentContext = ({ children })  =>{
 const [productos, setProductos] = useState([])
 const [cantidad, setCantidad] = useState(0)
 const [cart, setCart] = useState ([])

 const agregarAlCarrito = (producto) =>{
    setCart([...cart, producto])
  
    const productoExistente = productos.find(p => p.id === producto.id);

    if (productoExistente) {
      
      const productosActualizados = productos.map(p =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setProductos(productosActualizados);
    } else {
      
      setProductos([...productos, { ...producto, cantidad: 1 }]);
    }

    setCantidad(cantidad + 1)
 }


    return(
        <CartContext.Provider value={{ productos, cantidad, agregarAlCarrito} }>
            {children}
        </CartContext.Provider>
    )
}