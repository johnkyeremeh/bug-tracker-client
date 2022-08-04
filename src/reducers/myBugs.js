import { RECEIVE_BUGS, ADD_BUG, POST_BUGS_ERRORS, POST_BUGS_FAILURE, REPLACE_BUG, REMOVE_BUG ,MARK_BUG } from "../actions/myBugs"


export default function myBugs(state = []
    , action) {
      console.log("myBugs Reducer", action)
      switch(action.type) {
        case RECEIVE_BUGS:
          return action.payload.data
        case POST_BUGS_FAILURE:
          
          return action.payload 
        case POST_BUGS_ERRORS:
          return action.payload
        case ADD_BUG:
            return [...state, action.payload.data]
        case REPLACE_BUG:
          return state.map((bug) => {
              if (bug.id === action.payload.id) {
                return {
                  ...bug,
                  summary: action.payload.summary,
                  description: action.payload.description,
                  username: action.payload.username,
                  status: action.payload.status,
                  priority: action.payload.priority,

                }
              } else return bug;
            })
        case REMOVE_BUG:
        return state.filter(bug => bug.id !== action.payload.id);
        default:
          return state;
      }
    };
    
    
    
    