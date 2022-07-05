import { Component } from "react";
import NavagitationContainer from "../containers/NavigationContainer";

export default class Login extends Component{

    render(){
        return(
        <div>
            <NavagitationContainer />
            <form>
                <label>Email</label>
                <input type="text" name="email"/><br/>
                <label>Password</label>
                <input type="text" name="email"/><br/>
                <input type="submit" name="email"/>
            </form>

        </div>)
        
    }
}

