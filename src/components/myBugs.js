import {Component} from "react"

import Table from 'react-bootstrap/Table';

import BugTable from "./BugTable";

// import { getMyBugs } from "../actions/myBugs";

class MyBugsList extends Component{
 
    render(){
      let myBugsListItems

      if (this.props.myBugs){
        myBugsListItems =  this.props.myBugs.map(bug => < BugTable key={bug.id}  bug={bug} handleClick={this.props.handleClick} />)
        console.log(myBugsListItems)
      }

      return (
        <Table>
          <thead>
            <tr>
              <th>Bug ID</th>
              <th>Summary</th>
              <th>Assigned</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created</th>
              <th>Learn</th>
            </tr>
          </thead>
           {this.props.myBugs.length && myBugsListItems ? this.props.myBugs.length && myBugsListItems  : "You currently don't have any bugs"} 
        </Table>)
    }
}


export default MyBugsList



