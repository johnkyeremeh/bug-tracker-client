import { RECEIVE_BUG, UPDATE_BUG} from "../actions/myBugs"

export default function bugReducer(state = {}
    , action) {

      console.log(action)
      switch(action.type) {
        case RECEIVE_BUG:
          return action.payload.bug.data
        case UPDATE_BUG:
          return {
            id: action.payload.bug.id,
            summary: action.payload.bug.data.attributes.summary,
            description: action.payload.bug.data.attributes.description,
            username: action.payload.bug.data.attributes.user.username,
            status: action.payload.bug.data.attributes.status,
            priority: action.payload.bug.data.attributes.priority,
            project: action.payload.bug.data.attributes.project,
          }
        default:
            return state;
      }
    };
    
    
    
    