import './App.css'
import Menu from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import { ShopComponentContext } from './context/CartContext';
import ItemCart from './components/ItemCart/ItemCart';



function App() {

      return (

        <ShopComponentContext>

        <BrowserRouter>          
          <Menu />
          <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />  
          <Route path="/ItemCart" element={<ItemCart />} />        
          <Route path='/Contacto' element={<Contacto/>} />                      
          </Routes>                      
           
        </BrowserRouter>

        </ShopComponentContext>
        
      );
    }
    
    export default App;
   
