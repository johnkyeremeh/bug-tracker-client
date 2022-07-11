import {Component} from "react"



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'




class MainComponent extends Component{

    render(){
        return(
            <div className="jumbotron">
            <h1>Bug Tracker Project</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.  This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
            <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Github Project</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
         <p>
            <Button variant="primary">Learn more</Button>
            </p>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Project SRS</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <p>
            <Button variant="primary">Learn more</Button>
            </p>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Video Demo</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <p>
            <Button variant="primary">Learn more</Button>
            </p>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
          </div>)
    }



}

export default MainComponent