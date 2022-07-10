
export default function currentUserReducer(state = null
    , action) {
      
      
      console.log("hitting the currentUserReducer", action)
      switch(action.type) {
        case "SET_CURRENT_USER":
            return action.payload
        default:
          return state;
      }
    };