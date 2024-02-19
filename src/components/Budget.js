import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
}, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

    if (newBudget > 20000){
        alert('Budget cannot exceed £20,000');
    };

    if(newBudget < totalExpenses) {
       alert("The value cannot be lower than £"+ totalExpenses);
    };
};



    return(
        <div className ='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type ="number" step ="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
