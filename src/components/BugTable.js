import { Component } from "react";
import {  Tbody, Tr,  Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


class BugTable extends Component{
    render(){
        return (

        <Tbody>
            <Tr>
              <Td>{this.props.bug.id}</Td>
              <Td>{this.props.bug.attributes.description}</Td>
              <Td>John Kyeremeh</Td>
              <Td>{this.props.bug.attributes.status}</Td>
              <Td>{this.props.bug.attributes.priority}</Td>
              <Td>CREATED DATE</Td>
              <Td>CREATED DATE</Td>
            </Tr>
          </Tbody>)}
}

export default BugTable