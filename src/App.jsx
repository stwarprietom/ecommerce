import './App.css'
import Menu from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';

    function App() {
      return (
        <div>
        <header>
        <Menu />                 
        </header>
        <div>  
        <ItemListContainer selectSneaker={"airmax"}/>      
               
        </div>
          
        </div>
        
      );
    }
    
    export default App;
   
