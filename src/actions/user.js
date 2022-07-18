import { setLoggedIn } from "./auth";
import { setCurrentUser } from "./currentUser";
import { history } from "../App";

const CREATE_USER = 'CREATE_USER';

export  const userSignup = credentials => {
 
    console.log("crediantials are:", credentials)
    
    debugger
    return  dispatch => {
        
        return fetch("http://localhost:3000/api/v1/signup", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(data => {
            debugger
        console.log("login data: ", data)

            if (data !== undefined) {
                
                alert("Logging in...")
                dispatch(setLoggedIn())
                 dispatch(setCurrentUser(data.user))
                 history.push("/dashboard")
            
            } else {
                alert(data.errors.map(error => error))
                // return dispatch({ type: POST_USER_ERRORS, payload: data })
            }
        })
        .catch(err => {
            alert("Unable to SignUp At This Time")
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}
