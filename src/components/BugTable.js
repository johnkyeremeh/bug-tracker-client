import { Component } from "react";
import { Link } from 'react-router-dom'
import React from "react";
import Moment from 'react-moment';


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
      console.log(this.props)
      
        return (
        <tbody >
            <tr className={renderColor(this.props.bug.attributes.priority)}>
              <td>{this.props.bug.id}</td>
              <td>{this.props.bug.attributes.summary}</td>
              <td>{this.props.bug.attributes.description}</td>
              <td>{this.props.bug.attributes.project.title}</td>
              <td>{this.props.bug.attributes.user.username}</td>
              <td>{this.props.bug.attributes.status}</td>
              <td>{this.props.bug.attributes.priority}</td>
              <td><Moment format="dddd, MMMM Do YYYY">{this.props.bug.attributes.created_at}</Moment></td>
              <td><Link to={`/bugs/${this.props.bug.id}`}>Edit</Link></td>
            </tr>
          </tbody>)}
}

export default BugTable