export default function myBugs(state = []
    , action) {

      console.log(action)
      switch(action.type) {
        case "SET_MY_BUGS":
          return state.concat(action.payload.data)
        case "CREATE_BUG":
            return [...state, action.payload]
        default:
          return state;
      }
    };
    
    
    
    