import { RECEIVE_BUGS, ADD_BUG, RECEIVE_BUG } from "../actions/myBugs"

export default function myBugs(state = []
    , action) {

      console.log(action)
      switch(action.type) {
        case RECEIVE_BUGS:
          return action.payload.data
        case ADD_BUG:
            return [...state, action.payload]
        default:
          return state;
      }
    };
    
    
    
    