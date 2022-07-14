import { Component } from "react";
import Table from 'react-bootstrap/Table';


const colors = ["table-danger", "#table-warning", "#table-success"]

// export function renderColor(priority){
//   const levels = ["High", "Medium", "Low"]
//   return {
//     level:(levels[priority-1]),
//     color: colors[priority-1] 
//   }
// }


export function renderColor(priority){

  let color
  if (priority === "High"){
    color = "table-danger"
  }else if (priority === "Medium"){
    color =  "table-warning"
  } else if (priority === "Low"){
    color =  "table-success"
  }
  return color;
  
}


class BugTable extends Component{
    render(){
        return (
        <tbody >
            <tr class={renderColor(this.props.bug.attributes.priority)}>
              <td>{this.props.bug.id}</td>
              <td>{this.props.bug.attributes.description}</td>
              <td>John Kyeremeh</td>
              <td>{this.props.bug.attributes.status}</td>
              <td>{this.props.bug.attributes.priority}</td>
              <td>CREATED DATE</td>
              <td>CREATED DATE</td>
            </tr>
          </tbody>)}
}

export default BugTable