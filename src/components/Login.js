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
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" placeholder="username" onChange={handleChange} value={loginFormData.username} /><br/>
                <label>Password</label>
                <input type="password" name="password" placeholder="username" onChange={handleChange} value={loginFormData.password} /><br/>
                <input type="submit" name="password"/>
            </form>

        </div>)
   
}

//this gives me an argument that comes into this component that looks like this:
// {
//     username: "test"
//     password:  "password"
// }

const mapStateToProps = (state) => {
    return {
        loginFormData: state.loginForm
    }
}




export default connect(mapStateToProps, {updateLoginForm, login})(Login)



