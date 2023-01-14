import { useState } from "react";
import "./CostForm.css"

const CostForm = () => {
    // document.getElementById().addEventListener('Click', (event) => {})

    const [inputName, setInputName] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: '',
    // });


    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        console.log(inputName);
        // setUserInput({
        //     ...userInput, //save inf from object userInput
        //     name: event.target.value 
        // });
        // setUserInput((previousState) => { // previousState is automatically function that save previous state and render real state after changing
        //     return {
        //         ...previousState,
        //         name: event.target.value
        //     }
        // })
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        //console.log(amount);
        // setUserInput({
        //     ...userInput, //save inf from object userInput
        //     amount: event.target.value 
        // });
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput, //save inf from object userInput
        //     date: event.target.value 
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault(); // this method prevents action - request to the server

        const costDate = {
            name: inputName,
            amount: inputAmount, 
            date: new Date(inputDate)
        };

        console.log(costDate);
        setInputName('');  // set emty value after pressing button
        setInputAmount('');
        setInputDate('');
    };



    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input type='text' value={inputName} onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Amount</label>
                    <input type = 'number' value={inputAmount} min = '0.01' step = '0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input  type = 'date' value={inputDate} min = '2019-01-01' step = '2023-12-31' onChange={dateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Add payment</button>
                </div>
            </div>

        </form>
        );
}

export default CostForm;