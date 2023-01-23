import "./CostList.css";
import CostItem from "./CostItem";

const CostList = (props) => {

    if(props.costs.length === 0) {
       return <h2 className="cost-list__fallback">In this year aren't payment</h2>
           
   }

    return(
        <ul className="cost-list">
            {props.costs.map((cost) => (
           <CostItem 
               key={cost.id} //this attribute shows unique id for each element CostItem. We need use key when we render list of elements
               date={cost.date} 
               description={cost.description} 
               amount={cost.amount}
               />
            ))}
        </ul>
    )
}

export default CostList;