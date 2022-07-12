export default function myProjects(state = []
    , action) {
      console.log(action)
      switch(action.type) {
        case "SET_MY_PROJECT":
          return state
        case "CREATE_PROJECT":
            return [...state, action.payload]
        default:
          return state;
      }
    };
    
    
    
    