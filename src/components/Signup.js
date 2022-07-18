import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import NavigationContainer from "../containers/NavigationContainer";



 class Signup extends Component{
    state = {
        username: "",
        email: "",
        password: "",
      }
      
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            username: this.state.username,
            email: this.state.email, 
            password: this.state.password
        }
        console.log("User current signing up:", this.state)
        this.props.userSignup(user)

        this.setState({
            username: "",
            email: "",
            password: "",
        })
    }

    render(){
        return(
            <div>
                <NavigationContainer />
                 <div className="Auth-form-container">
                        <Form onSubmit={this.handleSubmit} className="Auth-form">
                        <h3 className="Auth-form-title">Sign Up</h3>
                            <div className="Auth-form-content">
                                <Form.Group className="mb-3 form-group"  controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value={this.state.username} name="username"  onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={this.state.email} name="email"  onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password}  name="password" onChange={this.handleChange} />
                                </Form.Group>
                                
                                <Button variant="primary" type="submit">Submit</Button>
                            </div>
                        </Form>
                </div>
            </div>  
        );
    }
}





export default connect(null)(Signup)