import { Component } from "react";

export default class Login extends Component{

    render(){
        return(
        <form>
            <label>Email</label>
            <input type="text" name="email"/><br/>
            <label>Password</label>
            <input type="text" name="email"/><br/>
            <input type="submit" name="email"/>
        </form>)
    }
}

