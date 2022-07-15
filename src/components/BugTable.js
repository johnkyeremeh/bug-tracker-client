import { Component } from "react";
import { Link } from 'react-router-dom'



//add style depending on the priority value 
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
        <tbody onClick={() => this.props.handleClick(this.props.bug)} >
            <tr className={renderColor(this.props.bug.attributes.priority)}>
              <td>{this.props.bug.id}</td>
              <td>{this.props.bug.attributes.description}</td>
              <td>John Kyeremeh</td>
              <td>{this.props.bug.attributes.status}</td>
              <td>{this.props.bug.attributes.priority}</td>
              <td>CREATED DATE</td>
              <td><Link to={`/bugs/${this.props.bug.id}`}>Learn More</Link></td>
            </tr>
          </tbody>)}
}

export default BugTable