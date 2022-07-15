
//Update the store with current users bug 
export const RECEIVE_BUGS =  `GET_BUGS`;
export const RECEIVE_BUG = 'GET_BUG';
export const ADD_BUG =  `ADD_BUG`;
export const UPDATE_BUG = 'UPDATE_BUG';
export const REMOVE_BUG = 'REMOVE_BUG';
export const MARK_BUG = 'MARK_BUG';

export const CREATE_BUG_SUCCESS= 'CREATE_BUG';
export const CREATE_BUG_ERRORS = 'POST_BUG_ERRORS';
export const CREATE_BUG_FAILURE = 'CREATE_BUG_FAILURE'


export const receiveBugs = (bugs) => {

    return {
        type: RECEIVE_BUGS,
        payload: bugs  
    }
}

export const receiveBug = (bug) => {

  return {
      type: RECEIVE_BUG,
      payload: bug  
  }
}


export const addBug = (bug) => {

    return {
        type: ADD_BUG,
        payload: bug  
    }
}


export const updateBug = (bug) => {
    return {
        type: UPDATE_BUG,
        payload: bug
    }
}

export const markComplete = (bug) => {
    return {
        type: MARK_BUG,
        payload: bug
    }
}


//action creator function to receive bugs /index
export const getMyBugs = () => {

    console.log("Starting task to get current user data")
    return (dispatch) => {
        return fetch("http://localhost:3000/api/v1/bugs", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(data => {
          
            console.log("was able to fetch the current user. Here's the data:", data)
            if (data !== undefined) {
                 dispatch(receiveBugs(data.bugs))
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


export const createBug = (BugFormData) => {

  console.log("Starting task to get create a new bug")

    return (dispatch) => {

      const sendableBugData = {
        title: BugFormData.title,
        description: BugFormData.description,
        status: BugFormData.status,
      }


          console.log("Bug being created", BugFormData)
        return fetch("http://localhost:3000/api/v1/bugs", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableBugData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
    
        if (data.error) {
          alert(data.error)
          console.log(data.error)
        } else {
          dispatch(addBug(data))
          console.log(data)
        }
      })
      .catch(console.log)
    }
  }

  export const getBug = (id) => {
    console.log("Getting bug with id", id)
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/bugs/${id}`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(data => {

            console.log("was able to fetch the current user. Here's the data:", data)
            if (data !== undefined) {
                 dispatch(receiveBug(data))
            } else {
                // alert(data.errors.map(error => error))
                // return dispatch({ type: POST_USER_ERRORS, payload: data })
            }
        })
        .catch(err => {
            // alert("Invalid Credentials: Unable to fetch user bug data")
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}



