//actions types
export const RECEIVE_ALL_PROJECTS =  `GET_ALL_PROJECTS`;
export const POST_ALL_PROJECTS_ERRORS = `POST_PROJECTS_ERRORS`;
export const POST_ALL_PROJECTS_FAILURE = `POST_PROJECTS_FAILUR`;


//action function for store to receive list of PROJECTS
export const receiveAllProjects = (projects) => {

    return {
        type: RECEIVE_ALL_PROJECTS,
        payload: projects 
    }
}

export const postAllProjectsErrors = (data) => {
  return {
    type: POST_ALL_PROJECTS_ERRORS,
    payload: data 
  }
}


export const postAllProjectsFailure = (err) => {
  return {
    type: POST_ALL_PROJECTS_ERRORS,
    payload: err 
  }
}

export const getAllProjects = () => {
    console.log("Starting task to a list of all available projects")
    return (dispatch) => {
        return fetch("https://salty-basin-75078.herokuapp.com/api/v1/all_projects", {
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
              dispatch(receiveAllProjects(data.projects))

              //future - > if data is undefined display error message 
            } else {
            
              console.log("Error occured")
                alert(data.errors.map(error => error))
                return dispatch(postAllProjectsErrors(data))
            }
        })
        .catch(err => {
          
            alert("Invalid Credentials: Unable to fetch projects")
            return dispatch(postAllProjectsFailure(err))
        })
    }
}

