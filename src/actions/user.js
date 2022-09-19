import { setLoggedIn } from "./auth";
import { setCurrentUser } from "./currentUser";
import { history } from "../App";

export const userSignup = credentials => {
 
    console.log("crediantials are:", credentials)
    
    
    return  dispatch => {
        
        return fetch("https://salty-basin-75078.herokuapp.com/api/v1/signup", {
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
        console.log("login data: ", data)
                
            if (data.errors){
                    alert(data.errors.map(error => error))
                    // return dispatch({ type: POST_USER_ERRORS, payload: data })
             } else if (data !== undefined) {
                
                alert("Logging in...")
                dispatch(setLoggedIn())
                localStorage.setItem("isAuthenticated", "true");
                 dispatch(setCurrentUser(data.user))
                 history.push("/myprojects")
            } 
        })
        .catch(err => {
            alert("Unable to Signup. Please make sure username and password are correct")
            
          
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}
