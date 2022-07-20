import {Component} from "react"
import React from "react";
import Table from 'react-bootstrap/Table';

import ProjectTable from "./ProjectTable";

class MyProjectsList extends Component{
 
    render(){
      let myProjectsListItems

      if (this.props.myProjects){
        myProjectsListItems =  this.props.myProjects.map(project => <ProjectTable key={project.id}  project={project}  />)
      } 
      
        
      console.log(this.props)
      return (
        <>
        <Table>
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>More Info</th>
            </tr>
          </thead>
           {this.props.myProjects && myProjectsListItems} 
        </Table>
        
        </>)
    }
}


export default MyProjectsList



