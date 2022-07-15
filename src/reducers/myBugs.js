import { RECIEVE_BUGS, ADD_BUG } from "../actions/myBugs"

export default function myBugs(state = []
    , action) {

      console.log(action)
      switch(action.type) {

        case "START_ADDING_BUG_REQUEST":
          return {
            ...state,
          }
        case RECIEVE_BUGS:
          return action.payload.data
        case ADD_BUG:
            return [...state, action.payload]
        default:
          return state;
      }
    };
    
    
    
    