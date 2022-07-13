
export default function LoggedIn(state = null
    , action) {  switch(action.type) {
        case "LOGGED_IN":
            return true 
        case "LOGGED_OUT": //create this
            return null ;
        default:
          return state;
      }
};


