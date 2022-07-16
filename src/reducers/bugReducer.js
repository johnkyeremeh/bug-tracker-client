import { RECEIVE_BUG, UPDATE_BUG, REPLACE_BUG,  MARK_BUG, REMOVE_BUG } from "../actions/myBugs"

export default function bugReducer(state = {}
    , action) {

      console.log(action)
      switch(action.type) {
        case RECEIVE_BUG:
          return action.payload.bug.data
        case UPDATE_BUG:
          return action.payload.bug.data
        case REPLACE_BUG:
            debugger
            return state.map((bug) => {
                if (bug.id === action.payload.id) {
                  return {
                    ...bug,
                    title: action.payload.title,
                    description: action.payload.description,

                  }
                } else return bug;
              })
        case MARK_BUG:
          return action.payload.bug.data
        case REMOVE_BUG:
          return action.payload.bug.data
        default:
            return state;
      }
    };
    
    
    
    