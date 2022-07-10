
export default function currentUserReducer(state = null
    , action) {
      console.log("current user is", action.payload)
      switch(action.type) {
        case "SET_CURRENT_USER":
            return action.payload
        case "CLEAR_CURRENT_USER":
            return null 
        default:
          return state;
      }
    };