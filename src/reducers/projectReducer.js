
import { RECEIVE_PROJECT, UPDATE_PROJECT } from "../actions/myProjects"

export default function projectReducer(state = {}
    , action) {
      console.log("projectReducer", action)
      
      
      switch(action.type) {
        case RECEIVE_PROJECT:
          return action.payload.project.data
        case UPDATE_PROJECT:
          return {
            id: action.payload.project.id,
            title: action.payload.project.data.attributes.title,
            description: action.payload.project.data.attributes.description,
          }
        default:
            return state;
      }
    };
    
    
    
    