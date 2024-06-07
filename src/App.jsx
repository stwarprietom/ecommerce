import './App.css'
import Menu from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';



function App() {

      return (
        <BrowserRouter>          
          <Menu />
          <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />          
          <Route path='/Contacto' element={<Contacto/>} />                      
          </Routes>                      
           
        </BrowserRouter>
        
      );
    }
    
    export default App;
   
