//sync 

export const setMyBugs = (bugs) => {

    return {
        type: "SET_MY_BUGS",
        payload: bugs  || null 
    }
}


export const createBug = (bugs) => {
    return {
        type: "CREATE_BUG",
        payload: bugs
    }
}

export const updateBug = (bugs) => {
    return {
        type: "UPDATE_BUG",
        payload: bugs
    }
}

export const markComplete = (bugs) => {
    return {
        type: "MARK_BUG",
        payload: bugs
    }
}



export const getMyBugs = () => {

    console.log("Starting task to get current user data")
    return async dispatch => {
        return await fetch("http://localhost:3000/api/v1/bugs", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(data => {
       

            console.log("fetched current user data", data)
            if (data !== undefined) {
                
                 dispatch(setMyBugs(data.bugs))
            } else {
                alert(data.errors.map(error => error))
                // return dispatch({ type: POST_USER_ERRORS, payload: data })
            }
        })
        .catch(err => {
            alert("Invalid Credentials: Unable to fetch user bug data")
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}

