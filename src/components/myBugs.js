import {Component} from "react"

import Table from 'react-bootstrap/Table';
import React from "react";
import BugTable from "./BugTable";

// import { getMyBugs } from "../actions/myBugs";

class MyBugsList extends Component{
 
    render(){
      let myBugsListItems

  

      return (
        <>
        <Table>
          <thead>
            <tr>
              <th>Bug ID</th>
              <th>Summary</th>
              <th>Description</th>
              <th>Project</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created</th>
              <th>More Info</th>
            </tr>
          </thead>
           
        </Table>
        
        </>)
    }
}


export default MyBugsList



