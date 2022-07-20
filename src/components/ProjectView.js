import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'



class ProjectView extends Component{

    render(){
        return(
            <div className="jumbotron">
                <div className="projects-header">
                    <h1>Details for Project #</h1>
                    <a href="">Back to Project List</a> <a href="">Edit</a>
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
          </div>)
    }




}


     

export default ProjectView; 






