
import React, {useState, useContext} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from '../context/AppContext';


const Currency =()=>{
    const { dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('DropDown');

    const clickEvent = (event) => {
        setNewCurrency(event);
    
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event,
        });
    }

    return (
      <Dropdown>
        <Dropdown.Toggle style={{backgroundColor:'#D1E7DD'}} id="dropdown-basic">
        {newCurrency}
        </Dropdown.Toggle>
  
        <Dropdown.Menu style={{backgroundColor:'#D1E7DD'}}>
        <Dropdown.Item onClick={() => clickEvent('$')}> $ Dollars</Dropdown.Item> 
          <Dropdown.Item onClick={() => clickEvent('£')}>£ Pound</Dropdown.Item>
          <Dropdown.Item onClick={() => clickEvent('€')}>€ Euro</Dropdown.Item>
          <Dropdown.Item onClick={() => clickEvent('₹')}>₹ Rupee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  
  export default Currency;