import { RECEIVE_PROJECTS, POST_PROJECTS_ERRORS, POST_PROJECTS_FAILURE, REPLACE_PROJECT} from "../actions/myProjects"

export default function myProjectsReducer(state = []
    , action) {
      console.log(action)
      switch(action.type) {
        case RECEIVE_PROJECTS:
          return action.payload.data
        case POST_PROJECTS_FAILURE:
          return action.payload
        case POST_PROJECTS_ERRORS:
          return action.payload
        // case ADD_PROJECT:
        //     return [...state, action.payload]
        case REPLACE_PROJECT:
          return state.map((project) => {
              if (project.id === action.payload.id) {
                return {
                  ...project,
                  title: action.payload.title,
                  description: action.payload.description
                }
              } else return project;
            })
        // case REMOVE_PROJECT:
        // return state.filter(project => project.id !== action.payload.id);
        default:
          return state;
      }
    };
    
    
    
    