import { Component } from "react";
import { Link } from 'react-router-dom'




class ProjectTable extends Component{
    constructor(props){
        super(props)
    }

  

    render(){
      
        return (
        <tbody >
            <tr>
              <td>{this.props.project.id}</td> 
              <td>{this.props.project.attributes.title}</td> 
              <td>{this.props.project.attributes.description}</td>
              <td><Link to={`/projects/${this.props.project.id}`}>Details</Link></td> 
            </tr>
          </tbody>)}
}

export default ProjectTable