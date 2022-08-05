import { history } from "../App";

//actions types
export const RECEIVE_BUGS =  `GET_BUGS`;
export const POST_BUGS_ERRORS = `POST_BUGS_ERRORS`;
export const POST_BUGS_FAILURE = `POST_BUGS_FAILUR`;

export const ADD_BUG =  `ADD_BUG`;
export const RECEIVE_BUG = 'GET_BUG';
export const UPDATE_BUG = 'UPDATE_BUG';
export const REPLACE_BUG = 'REPLACE_BUG';
export const REMOVE_BUG = 'REMOVE_BUG';
export const MARK_BUG = 'MARK_BUG';

export const CREATE_BUG_SUCCESS= 'CREATE_BUG';
export const CREATE_BUG_ERRORS = 'POST_BUG_ERRORS';
export const CREATE_BUG_FAILURE = 'CREATE_BUG_FAILURE'



//action function for store to receive list of bugs
export const receiveBugs = (bugs) => {

    return {
        type: RECEIVE_BUGS,
        payload: bugs  
    }
}

export const postBugsErrors = (data) => {
  return {
    type: POST_BUGS_ERRORS,
    payload: data 
  }
}


export const postBugsFailure = (err) => {
  return {
    type: POST_BUGS_ERRORS,
    payload: err 
  }
}

//action function for store to receive specific bug inforamtion
export const receiveBug = (bug) => {

  return {
      type: RECEIVE_BUG,
      payload: bug  
  }
}

//action function for add a bug 
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

export const replaceBug = (bug) => {
  return {
      type: REPLACE_BUG,
      payload: bug
  }
}

export const removeBug = (id) => {
  return {
      type:  REMOVE_BUG,
      payload: id
  }
}

export const markComplete = (id) => {
    return {
        type: MARK_BUG,
        payload: id
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
          
            if (data !== undefined) {
            
              console.log("Sucess. Here's the data:", data)
              dispatch(receiveBugs(data.bugs))

              //future - > if data is undefined display error message 
            } else {
            
              console.log("Error occured")
                alert(data.errors.map(error => error))
                return dispatch(postBugsErrors(data))
            }
        })
        .catch(err => {
          
            // alert("Invalid Credentials: Unable to fetch user bug data")
            return dispatch(postBugsFailure(err))
        })
    }
}


export const createBug = (BugFormData) => {



  console.log("Starting task to get create a new bug")

    return (dispatch) => {

     
      const sendableBugData = {
        summary: BugFormData.summary,
        description: BugFormData.description,
        status: BugFormData.status,
        priority: BugFormData.priority,
        project_id: BugFormData.project
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
        
          dispatch(addBug(data.bug))
          console.log(data)
        }
      })
      .then(() => {
        history.push("/mybugs")
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
                alert(data.errors.map(error => error))
                // return dispatch({ type: POST_USER_ERRORS, payload: data })
            }
        })
        .catch(err => {
            // alert("Invalisd Credentials: Unable to fetch user bug data")
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}


export const postUpdateBug = (bug) => {
  const id = bug.id 

  

  const sendableBugData = {
    summary: bug.summary,
    description: bug.description,
    status: bug.status,
    priority: bug.priority,
    project_id: bug.project_id
  }
  

  console.log("Updating bug", id )
  return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/bugs/${id}`, {
          credentials: "include",
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
        body: JSON.stringify(sendableBugData)
      })
      .then(res => res.json())
      .then(data => {
        
          console.log("was able to fetch the current user. Here's the data:", data)
          if (data !== undefined) {
               dispatch(updateBug(data))
               dispatch(replaceBug(data))
          } else {
              alert(data.errors.map(error => error))
              // return dispatch({ type: POST_USER_ERRORS, payload: data })
          }
      })
      .then(() => {
        history.push("/myBugs")
      })
      .catch(err => {
          alert("Invalid Credentials: Unable to update user bug data")
          // return dispatch({ type: POST_USER_FAILURE, payload: err })
      })
  }
}


export const deleteBug = (id) => {
  

  console.log("Deleting bug", id )
  return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/bugs/${id}`, {
          credentials: "include",
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
      })
      .then(res => res.json())
      .then(data => {
        dispatch(removeBug(id))
      })
      .then(() => {
        history.push("/myBugs")
      })
      .catch(err => {
        
          alert("Unable to delete the current user")
          // return dispatch({ type: POST_USER_FAILURE, payload: err })
      })
  }
}

