import { RECEIVE_BUG, UPDATE_BUG, MARK_BUG, REMOVE_BUG } from "../actions/myBugs"

export default function bugReducer(state = {}
    , action) {

      console.log(action)
      switch(action.type) {
        case RECEIVE_BUG:
          return action.payload.bug.data
        case UPDATE_BUG:
          return action.payload.bug.data
        case MARK_BUG:
          return action.payload.bug.data
        case REMOVE_BUG:
          return action.payload.bug.data
        default:
            return state;
      }
    };
    
    
    
    