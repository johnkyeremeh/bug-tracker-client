import { history } from "../App";

import { setLoggedIn } from "./auth"
import { clearLoginForm } from "./loginForm"
import { getMyBugs} from "./myBugs"

// synchronomous action creators 
export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user 
    }
}

//remove user from the current user from the store 
export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}


// asynchronous action creators 
export const login = credentials => {

    console.log("crediantials are:", credentials)
    
    return  dispatch => {
        

        return  fetch("https://salty-basin-75078.herokuapp.com/api/v1/login", {
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

    
            if (data !== undefined) {
                
                alert("Logging in...")
                 dispatch(setCurrentUser(data.user))
                 dispatch(setLoggedIn())
                 localStorage.setItem("isAuthenticated", "true");
                 dispatch(clearLoginForm())
                 dispatch(getMyBugs())
                 history.push("/myprojects")
            
            } else {
                alert(data.errors.map(error => error))
                // return dispatch({ type: POST_USER_ERRORS, payload: data })
            }
        })
        .catch(err => {
            alert("Unable to Signup. Please make sure username and password are correct")
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}



export const getCurrentUser = () => {


    console.log("DISPATCHING GET CURRENT USER")
    return  dispatch => {
        return  fetch("https://salty-basin-75078.herokuapp.com/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(data => {
       
            console.log("getting the current user", data)
            if (data !== undefined) {
                console.log("User data we are fetching", data)
                dispatch(setLoggedIn())
                localStorage.setItem("isAuthenticated", "true");
                 dispatch(setCurrentUser(data.user))
                 dispatch(clearLoginForm())
                 dispatch(getMyBugs())
            } else {
                alert(data.errors.map(error => error))
                // return dispatch({ type: POST_USER_ERRORS, payload: data })
            }
        })
        .catch(err => {
            // alert("Invalid Credentials: Unable to Sign In At This Time")
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}






