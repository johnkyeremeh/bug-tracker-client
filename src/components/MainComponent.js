import {Component} from "react"
import React from "react";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'




class MainComponent extends Component{

    render(){
        return(
            <div className="jumbotron">
            <h1>Bug Tracker Project</h1>
            <p>
            This project sets out to create a Bug Tracking application, allowing users to self manage bugs within their own projects.
            Please find links to documentation and the code behind this project along with my 3 main goals when I started this project:
            </p>
            <ul>
              <li>Build a Software Requirements Specification and follow it to completion.</li>
              <li>Plan the work in managable sprints and set deadlines using Notion.</li>
              <li>Implement MVC architecture & Implement Authentication(Local).</li>
            </ul>
            <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Github Project</Card.Title>
      <Card.Text>
       The following link will take you to the Github page
       where the source code for this project has been well explained and documented.
      </Card.Text>
         <p>
            <Button variant="primary" href="https://www.google.com/" target="_blank">Learn more</Button>
            </p>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Project SRS</Card.Title>
      <Card.Text>
      For this project I created and followed a software requirements specification for this project,
      which helped me remain on track and clearly describe the project's goals and scope.
      </Card.Text>
      <p>
            <Button variant="primary">Learn more</Button>
            </p>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Video Demo</Card.Title>
      <Card.Text>
        I have a video of the application being used, showcasing its core features for a user.
      </Card.Text>
      <p>
            <Button variant="primary">Learn more</Button>
            </p>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
    </Card.Footer>
  </Card>
</CardGroup>
          </div>)
    }



}

export default MainComponent