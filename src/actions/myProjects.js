import { history } from "../App";

//actions types
export const RECEIVE_PROJECTS =  `GET_PROJECTS`;
export const POST_PROJECTS_ERRORS = `POST_PROJECTS_ERRORS`;
export const POST_PROJECTS_FAILURE = `POST_PROJECTS_FAILUR`;

export const ADD_PROJECT =  `ADD_PROJECT`;
export const RECEIVE_PROJECT = 'GET_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const REPLACE_PROJECT = 'REPLACE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const MARK_PROJECT = 'MARK_PROJECT';

export const CREATE_PROJECT_SUCCESS= 'CREATE_PROJECT';
export const CREATE_PROJECT_ERRORS = 'POST_PROJECT_FAILURE'



//action function for store to receive list of PROJECTS
export const receiveProjects = (projects) => {

    return {
        type: RECEIVE_PROJECTS,
        payload: projects 
    }
}

export const postProjectsErrors = (data) => {
  return {
    type: POST_PROJECTS_ERRORS,
    payload: data 
  }
}


export const postProjectsFailure = (err) => {
  return {
    type: POST_PROJECTS_ERRORS,
    payload: err 
  }
}

//action function for store to receive specific bug inforamtion
export const receiveProject = (project) => {

  return {
      type: RECEIVE_PROJECT,
      payload: project  
  }
}

//action function for add a bug 
export const addProject = (project) => {

    return {
        type: ADD_PROJECT,
        payload: project  
    }
}


export const updateProject = (project) => {
    return {
        type: UPDATE_PROJECT,
        payload: project
    }
}

export const replaceProject= (project) => {
  return {
      type: REPLACE_PROJECT,
      payload: project
  }
}

export const removeProject = (id) => {
  return {
      type:  REMOVE_PROJECT,
      payload: id
  }
}

export const markProjectComplete = (id) => {
    return {
        type: MARK_PROJECT,
        payload: id
    }
}

///what allows us to return function and have it work with redux

//why do we use thunk
///
//action creator function to receive bugs /index
export const getMyProjects = () => {

    console.log("Starting task to get current user data")
    return (dispatch) => {
        return fetch("https://salty-basin-75078.herokuapp.com/api/v1/projects", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(data => {
            if (data.errors){
              console.log("Error occured")
              alert(data.errors.map(error => error))
              return dispatch(postProjectsErrors(data))
            } else if (data !== undefined) {
        
              console.log("Sucess. Here's the data:", data)
              dispatch(receiveProjects(data.projects))

              //future - > if data is undefined display error message 
            } 
        })
        .catch(err => {
          
            alert("Invalid Credentials: Unable to fetch current users projects")
            return dispatch(postProjectsFailure(err))
        })
    }
}


export const createProject = (ProjectFormData) => {



  console.log("Starting task to get create a new project")

    return (dispatch) => {

      const sendableProjectData = {
        title: ProjectFormData.title,
        description: ProjectFormData.description,
      }
 
          console.log("Project being created", sendableProjectData)
        return fetch("https://salty-basin-75078.herokuapp.com/api/v1/projects", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableProjectData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
        if (data.error) {
          alert(data.error)
          console.log(data.error)
        } else {
          dispatch(addProject(data))
            
          console.log(data)
        }
      })
      .then(() => {
        history.push("/myprojects")
      })
      .catch(console.log)
    }
  }



  
  export const getProject = (id) => {
    
    console.log("Getting project with id", id)
    return (dispatch) => {
        return fetch(`hhttps://salty-basin-75078.herokuapp.com/api/v1/projects/${id}`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(data => {
          
            console.log("was able to fetch the current project. Here's the data:", data)
            if (data !== undefined) {
                 dispatch(receiveProject(data))
            } else {
                alert(data.errors.map(error => error))
                // return dispatch({ type: POST_USER_ERRORS, payload: data })
            }
        })
        .catch(err => {
            alert("Invalisd Credentials: Unable to fetch project data")
            // return dispatch({ type: POST_USER_FAILURE, payload: err })
        })
    }
}


export const postUpdateProject = (project) => {
  const id = project.id 

  

  const sendableProjectData = {
    title: project.title,
    description: project.description,
    user: project.user
  }

  console.log("Updating project", id )
  return (dispatch) => {
      return fetch(`https://salty-basin-75078.herokuapp.com/api/v1/projects/${id}`, {
          credentials: "include",
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
        body: JSON.stringify(sendableProjectData)
      })
      .then(res => res.json())
      .then(data => {
        
          console.log("was able to fetch the current user. Here's the data:", data)
          if (data.errors){
            alert(data.errors.map(error => error))
          } else if (data !== undefined) {
            
               dispatch(updateProject(data))
               dispatch(replaceProject(data))
               history.push("/myProjects")
          } 
      })
      .then(() => {
        history.push("/myProjects")
      })
      .catch(err => {
          alert("Invalid Credentials: Unable to fetch project data")
          // return dispatch({ type: POST_USER_FAILURE, payload: err })
      })
  }
}


// export const deleteBug = (id) => {
  

//   console.log("Deleting bug", id )
//   return (dispatch) => {
//       return fetch(`http://localhost:3000/api/v1/bugs/${id}`, {
//           credentials: "include",
//           method: "DELETE",
//           headers: {
//               "Content-Type": "application/json",
//           },
//       })
//       .then(res => res.json())
//       .then(data => {
//         dispatch(removeBug(id))
//       })
//       .then(() => {
//         history.push("/myBugs")
//       })
//       .catch(err => {
        
//           alert("Unable to delete the current user")
//           // return dispatch({ type: POST_USER_FAILURE, payload: err })
//       })
//   }
// }

