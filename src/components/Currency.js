
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


    // const [newCurrency, setNewCurrency] = useState(currency);
    
    // const clickEvent = (event) => {
    //     setNewCurrency(event.target.value);
    // }


function Currency() {
    return (
      <Dropdown>
        <Dropdown.Toggle style={{backgroundColor:'#D1E7DD'}} id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
  
        <Dropdown.Menu style={{backgroundColor:'#D1E7DD'}}>
          {/* <Dropdown.Item value="newCurrency" onClick={clickEvent} >$ Dollars</Dropdown.Item> */}
          <Dropdown.Item href="#/action-2">£ Pound</Dropdown.Item>
          <Dropdown.Item href="#/action-3">€ Euro</Dropdown.Item>
          <Dropdown.Item href="#/action-3">₹ Rupee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  

  export default Currency;