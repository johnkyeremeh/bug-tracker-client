import {Component} from "react"
import React from "react";
import Table from 'react-bootstrap/Table';
import { getMyProjects } from "../actions/myProjects";
import { connect } from "react-redux";
import ProjectTable from "./ProjectTable";

class MyProjectsList extends Component{

  componentDidMount() {                                   
    this.props.getMyProjects()
  }
 
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


const mapStatetoProps = (state) => {
  return {  
   myProjects: state.myProjects
  }
}

export default connect(mapStatetoProps, {getMyProjects})(MyProjectsList)



