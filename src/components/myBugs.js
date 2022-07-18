import {Component} from "react"

import Table from 'react-bootstrap/Table';

import BugTable from "./BugTable";

// import { getMyBugs } from "../actions/myBugs";

class MyBugsList extends Component{
 
    render(){
      let myBugsListItems

      if (this.props.myBugs){
        myBugsListItems =  this.props.myBugs.map(bug => < BugTable key={bug.id}  bug={bug} handleClick={this.props.handleClick} />)
      } 

      return (
        <>
        <Table>
          <thead>
            <tr>
              <th>Bug ID</th>
              <th>Summary</th>
              <th>Description</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created</th>
              <th>More Info</th>
            </tr>
          </thead>
           {this.props.myBugs && myBugsListItems} 
        </Table>
        
        </>)
    }
}


export default MyBugsList



