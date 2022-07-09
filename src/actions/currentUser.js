// synchronomous action creators 
export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user 
    }
}



// asynchronous action creators 
export const login = credentials => {

    console.log("crediantials are:", credentials)
    
    return dispatch => {
        

        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(data => {
            if (data.user !== undefined) {
                // localStorage.setItem("token", data.jwt)
                alert("Successfully Signed Up")
                 dispatch(setCurrentUser(data.user))
            } else {
                alert(data.errors.map(error => error))
                // return dispatch({ type: POST_USER_ERRORS, payload: data })
            }
        })
        .catch(err => {
            alert("Invalid Credentials: Unable to Sign In At This Time")
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}

export const getCurrentUser = () => {


    console.log("DISPATCHING GET CURRENT USER")
    return dispatch => {
        
        return fetch("http://localhost:3000/api/v1/auto_login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log("getting the current user", data)
            if (data.user !== undefined) {
                console.log("User data we are fetching", data.user)
                // localStorage.setItem("token", data.jwt)
                alert("Successfully found current user")
                 dispatch(setCurrentUser(data.user))
            } else {
                alert(data.errors.map(error => error))
                // return dispatch({ type: POST_USER_ERRORS, payload: data })
            }
        })
        .catch(err => {
            alert("Invalid Credentials: Unable to Sign In At This Time")
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}