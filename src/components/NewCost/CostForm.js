import { useState } from "react";
import "./CostForm.css"

const CostForm = () => {
    // document.getElementById().addEventListener('Click', (event) => {})

    // const [name, setName] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: '',
    });


    const nameChangeHandler = (event) => {
        // setName(event.target.value);
        setUserInput({
            ...userInput, //save inf from object userInput
            name: event.target.value 
        });
    };

    const amountChangeHandler = (event) => {
        //setAmount(event.target.value);
        setUserInput({
            ...userInput, //save inf from object userInput
            amount: event.target.value 
        });
    };

    const dateChangeHandler = (event) => {
        // setDate(event.target.value);
        setUserInput({
            ...userInput, //save inf from object userInput
            date: event.target.value 
        });
    };

    return <form>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Name</label>
                <input type='text' onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Amount</label>
                <input type = 'number' min = '0.01' step = '0.01' onChange={amountChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Date</label>
                <input type = 'date' min = '2019-01-01' step = '2023-12-31' onChange={dateChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button tabIndex="submit">Add payment</button>
            </div>
        </div>

    </form>
}

export default CostForm;