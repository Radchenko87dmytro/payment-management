//import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from "./CostList";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) =>{
        setSelectedYear(year);
        console.log(year);
        console.log("Costs year value");
        props.onFilter(year);
    }

    const filteredCosts = props.costs.filter(item =>{
        return item.date.getFullYear().toString() === selectedYear;
    })
    
    
    

   


    return(
        <div>
            
            <Card className="costs">
                <CostsFilter year={selectedYear} //<-this is two-way bindingg, we set value useState('2021') in CostFilter by attribute year={selectedYear}
                onChangeYear={yearChangeHandler}/>

                <CostList costs={filteredCosts}/>
                
                {/* {filteredCosts.length === 0 && <p>In this year aren't payment</p>}
                {filteredCosts.length > 0 && filteredCosts.map((cost) => (
                <CostItem 
                    key={cost.id} //this attribute shows unique id for each element CostItem. We need use key when we render list of elements
                    date={cost.date} 
                    description={cost.description} 
                    amount={cost.amount}
                    />
                ))} */}
                
                
                {/* <CostItem date={props.costs[0].date} description={props.costs[0].description} amount={props.costs[0].amount}/>
                <CostItem date={props.costs[1].date} description={props.costs[1].description} amount={props.costs[1].amount}/>
                <CostItem date={props.costs[2].date} description={props.costs[2].description} amount={props.costs[2].amount}/> */}

            </Card>
        </div>
        

    )
}

export default Costs;