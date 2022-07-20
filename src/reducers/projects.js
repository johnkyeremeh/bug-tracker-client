import { RECEIVE_ALL_PROJECTS, POST_ALL_PROJECTS_ERRORS, POST_ALL_PROJECTS_FAILURE} from "../actions/projects"

export default function projectsReducer(state = []
    , action) {
      console.log(action)
      switch(action.type) {
        case RECEIVE_ALL_PROJECTS:
          return action.payload.data
        case POST_ALL_PROJECTS_FAILURE:
          return action.payload 
        case POST_ALL_PROJECTS_ERRORS:
          return action.payload
        default:
          return state;
      }
    };
    
    
    
    