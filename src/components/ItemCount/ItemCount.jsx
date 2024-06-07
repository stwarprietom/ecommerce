import {useState} from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const ItemCount = ({inital, stock}) => {
    const [count, setCount] = useState(inital);

    const decrease = () => {

        setCount(count -1);

        }
    
        const increase = () => {

            setCount(count +1);
            
            }

  return (
    <div>
    <ToggleButton variant="secondary" size="sm" id="tbg-btn-1" disabled={count<=0} onClick={decrease}>-</ToggleButton>
        <span>{count}</span>
        <ToggleButton variant="secondary" size="sm" id="tbg-btn-1"  disabled={count>=stock} onClick={increase}>+</ToggleButton> 
        <div>
            <ToggleButton variant="secondary" size="sm" id="tbg-btn-1">Agregar</ToggleButton>
        </div>     
    </div>
  )
} 

export default ItemCount
