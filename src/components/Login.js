import {connect} from "react-redux"
import NavagitationContainer from "../containers/NavigationContainer";
import { updateLoginForm } from "../actions/loginForm"; 
import { login } from "../actions/currentUser";


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
            <NavagitationContainer />
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Username</label>
                                    <input
                                    type="text"
                                    name="username"
                                    className="form-control mt-1"
                                    placeholder="Enter your username"
                                    onChange={handleChange} 
                                    value={loginFormData.username}
                                    />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                type="password"
                                name="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={handleChange} 
                                value={loginFormData.password}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                Submit
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        </div>)
   
}


const mapStateToProps = (state) => {
    return {
        loginFormData: state.loginForm
    }
}




export default connect(mapStateToProps, {updateLoginForm, login})(Login)



