import {Component} from "react"

import Table from 'react-bootstrap/Table';

import BugTable from "./BugTable";
import { getMyBugs } from "../actions/myBugs";




class MyBugsList extends Component{
 

   myBugsListItems = this.props.length > 0 ? this.props.myBugs.map(bug => <BugTable key={bug.id}  bug={bug}/>) : null 

  //  componentDidMount(){
  //   return dispatch => {
  //     dispatch(getMyBugs())
  //   }
  // }

    render(){

  
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
          {/* {this.myBugsListItems} */}
        </Table>)
    }
}


export default MyBugsList



