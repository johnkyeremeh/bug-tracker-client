import {Component} from "react"
import React from "react";
import {connect} from "react-redux"


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { getCurrentUser } from "../actions/currentUser";


class DashboardContainer extends Component{

    componentDidMount() {   
        this.props.getCurrentUser()
    }

    render(){
    
        
        return(
            <div className="jumbotron">
                <h1>Hello, {this.props.currentUser && this.props.currentUser.data.attributes.username}</h1>
            <p>
             Welcome to your account dashboard. Check out these performance statistics below:
            </p>
            <CardGroup>
                <Card>
                    <Card.Body>
                    {/* <Card.Title>Tickets by Priority</Card.Title> */}
                    <Card.Title>Tickets by Priority</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    
                            {/* <p>
                            <Button variant="primary">Learn more</Button>
                            </p> */}
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Tickets By Type</Card.Title>
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
                    <Card.Title>Tickets by Status</Card.Title>
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
const mapStatetoProps = (state) => {
    return {
     currentUser: state.currentUser
    }
 }

export default connect(mapStatetoProps, {getCurrentUser})(DashboardContainer)