import { Component } from "react";
import { connect } from "react-redux";
import NavigationContainer from "../containers/NavigationContainer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { getProject } from "../actions/myProjects";
import { Link } from 'react-router-dom'
import React from "react";

class ProjectView extends Component{

    


        
    componentDidMount() {                                 
        this.props.getProject(this.props.match.params.id);
    }


    render(){
        
        const project = this.props.project
        
        return(
            <>
            <NavigationContainer />
            <div className="jumbotron">
                <div className="projects-header">
                    <h1>Details for Project #{project.id}</h1>
                    <Link to={{ pathname: `/myprojects` }}>Back to Projects </Link> 
                    <Link to={{ pathname: `/projects/${project.id}/edit`, state: { project: project } }}>Edit Project</Link> 
                </div>

            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Tickets for this project</Card.Title>
                        <Card.Text>
                            Condensed ticket details
                        </Card.Text>
                        
                       
                    </Card.Body>
                    <Card.Footer>
                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </Card.Footer>
                </Card>
                
                </CardGroup>
          </div>
          </>)
    }




}

const mapStatetoProps = (state) => {
    return {
     project: state.project
     // bugFormData: state.bugFormData
    }
 }


     

export default connect(mapStatetoProps, {getProject} )(ProjectView); 






