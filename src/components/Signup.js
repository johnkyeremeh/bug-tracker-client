import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from "./Navigation";
import {connect} from 'react-redux'



 class Signup extends Component{
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
      
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("User current signing up:", this.state)
        this.props.addUser(this.state)
    }

    render(){
        return(
            <div>
                <Navigation />
                 <Form onSubmit={this.handleSubmit}>
                 <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={this.state.username} name="username"  onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.email} name="email"  onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.password}  name="password" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.confirmPassword} name="confirmPassword" onChange={this.handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br></br>
                <br></br>
            </Form>
            <p>Or SignUp with Google</p>
            </div>  
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch({type: "ADD_USER", payload: user}),
    }
}


export default connect(null, mapDispatchToProps)(Signup)