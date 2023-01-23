import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css';
//import React, { useState } from 'react';

const CostItem = (props) => {
    // document.getElementById('root').addEventListener()

    //const [description, setDescription] = useState(props.description); // useState can exists only in this place in component

    //console.log("Text in component definition");

    // const changeDescriptionHandler = () => {
    //     //description = "New Cost";
    //     setDescription('New Cost'); //description = "New Cost"; & CostItem(props);
    //     console.log(description);
    // };

    

    return (
        <li>
        <Card className='cost-item'>
            <CostDate date ={props.date}/>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>{"$"+props.amount}</div>
                
            </div>
            {/* <button onClick={changeDescriptionHandler}>Change description</button> */}
            
        </Card>
        </li>



     );
}

export default CostItem;