// import CostItem from "./components/CostItem";
import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Fridge",
    amount: 900,
  },
  {
    id: "c2",
    date: new Date(2022, 11, 1),
    description: "Bike",
    amount: 450,
  },
  {
    id: "c3",
    date: new Date(2022, 11, 25),
    description: "jacket",
    amount: 380,
  },
];

// const App = () =>
const App = () => {
  //const p = document.createElement('p');
  //p.textContent = 'Hey there!'
  //document.getElementById('root').append(p);

  const [costs, setCosts] = useState(INITIAL_COSTS);

  // return React.createElement('div', {},
  //        React.createElement('h1', {}, "Lets lern React!"),
  //        React.createElement(Costs, {costs: costs})
  //        );

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      // argument prevCosts we get automativ from react

      return [cost, ...prevCosts]; //we are set new element (cost,) and adding all elements from previous array by helping operator spred (...prevCosts)
    });

    // console.log(INITIAL_COSTS);
    // console.log('App Componemt');
  };

  const filterHandler = (selectedYear) => {
    console.log(selectedYear);
    // cost = cost.filter(item =>{
    //   cost.conteins(selectedYear);
    // })
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} onFilter={filterHandler} />
    </div>
  );
};

export default App;
