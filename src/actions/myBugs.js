import axios from 'axios'
//update the state with the current state of bugs 

export const RECIEVE_BUGS =  `GET_BUGS`;
export const ADD_BUG =  `ADD_BUG`;
export const CREATE_BUG_SUCCESS= 'CREATE_BUG';
export const CREATE_BUG_ERRORS = 'POST_BUG_ERRORS';
export const CREATE_BUG_FAILURE = 'CREATE_BUG_FAILURE'


export const setMyBugs = (bugs) => {

    return {
        type: RECIEVE_BUGS,
        payload: bugs  
    }
}

export const addBug = (bug) => {

    return {
        type: ADD_BUG,
        payload: bug  
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



//GET REQUEST FOR /bugs
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
        debugger
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
