import {Component} from "react"

import { Table, Thead, Tr, Th} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import BugTable from "./BugTable";


class MyBugsList extends Component{

   myBugsListItems = this.props.myBugs.map(bug => <BugTable key={bug.id} bug={bug}/>)
    render(){

      return (
        <Table>
          <Thead>
            <Tr>
              <Th>Bug ID</Th>
              <Th>Summary</Th>
              <Th>Assigned</Th>
              <Th>Status</Th>
              <Th>Priority</Th>
              <Th>Created</Th>
              <Th>Learn</Th>
            </Tr>
          </Thead>
          {this.myBugsListItems}
        </Table>)
    }
}


export default MyBugsList



