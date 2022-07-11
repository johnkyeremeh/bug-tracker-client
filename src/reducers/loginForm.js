const initialState = {
    username: "",
    password: ""
}

export default function LoginFormReducer(state = initialState
    , action) {
    
      switch(action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.payload;
        case "CLEAR_LOGIN_FORM":
            return initialState;
        default:
          return state;
      }
    };