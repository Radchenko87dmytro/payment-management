import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) =>{
        setSelectedYear(year);
        console.log(year);
        console.log("Costs year value");
    }

    return(
        <div>
            
            <Card className="costs">
                <CostsFilter year={selectedYear} //<-this is two sides binding, we set value useState('2021') in CostFilter by attribute year={selectedYear}
                onChangeYear={yearChangeHandler}/>
                <CostItem date={props.costs[0].date} description={props.costs[0].description} amount={props.costs[0].amount}/>
                <CostItem date={props.costs[1].date} description={props.costs[1].description} amount={props.costs[1].amount}/>
                <CostItem date={props.costs[2].date} description={props.costs[2].description} amount={props.costs[2].amount}/>
            </Card>
        </div>
        

    )
}

export default Costs;