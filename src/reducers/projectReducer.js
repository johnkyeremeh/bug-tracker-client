
import { RECEIVE_PROJECT, UPDATE_PROJECT } from "../actions/myProjects"

export default function projectReducer(state = {}
    , action) {
      console.log(action)
      
      switch(action.type) {
        case RECEIVE_PROJECT:
          return action.payload.project.data
        case UPDATE_PROJECT:
          return {
            id: action.payload.project.id,
            summary: action.payload.project.data.attributes.summary,
            description: action.payload.project.data.attributes.description,
            username: action.payload.project.data.attributes.user.username,
            status: action.payload.project.data.attributes.status,
            priority: action.payload.project.data.attributes.priority,
            project: action.payload.project.data.attributes.project,
          }
        default:
            return state;
      }
    };
    
    
    
    