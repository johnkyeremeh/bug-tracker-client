import {connect} from "react-redux"
import NavigationContainer from "../containers/NavigationContainer";
import { updateLoginForm } from "../actions/loginForm"; 
import { login } from "../actions/currentUser";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = ({ loginFormData, updateLoginForm, login}) => {

    const handleChange = event => {
        const { name, value } = event.target 
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(loginFormData)
    }

    return(
        <div>
                <NavigationContainer />
                 <div className="Auth-form-container">
                        <Form onSubmit={handleSubmit} className="Auth-form">
                        <h3 className="Auth-form-title">Sign In</h3>
                            <div className="Auth-form-content">
                                <Form.Group className="mb-3 form-group"  controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value={loginFormData.username} name="username"  onChange={handleChange}/>
                                </Form.Group>


                                <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={loginFormData.password}  name="password" onChange={handleChange} />
                                </Form.Group>
                                
                                <Button variant="primary" type="submit">Submit</Button>
                            </div>
                        </Form>
                </div>
            </div>  
        )

}


const mapStateToProps = (state) => {
    return {
        loginFormData: state.loginForm
    }
}




export default connect(mapStateToProps, {updateLoginForm, login})(Login)



