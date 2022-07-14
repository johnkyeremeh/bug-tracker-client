
export default function currentUserReducer(state = null
    , action) {
      
      switch(action.type) {
        case "SET_CURRENT_USER":
            return action.payload
        case "CLEAR_CURRENT_USER":
            console.log("current user is empty")
            return null ;
        case "POST_USER_ERRORS":
          return action.payload
          case "POST_USER_FAILURE":
          return action.payload
        default:
          return state;
      }
    };