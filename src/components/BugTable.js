import { Component } from "react";

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


class BugTable extends Component{
    render(){
        return (
        <tbody>
            <tr>
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