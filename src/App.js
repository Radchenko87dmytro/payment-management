import CostItem from "./components/CostItem";



function App() {

//const p = document.createElement('p');
//p.textContent = 'Hey there!'
//document.getElementById('root').append(p);

const costs = [
  {
    date: new Date(2021, 2, 12),
    description: 'Fridge',
    amount: 900,
  },
  {
    date: new Date(2022, 11, 1),
    description: 'Bike',
    amount: 450,
  },
  {
    date: new Date(2022, 11, 25),
    description: 'jacket',
    amount: 380,
  }
]


  return (
    <div>
      <h1>Lets lern React!</h1>
      <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}></CostItem>
      <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount}></CostItem>
      <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount}></CostItem>
    </div>

  );
}

export default App;
