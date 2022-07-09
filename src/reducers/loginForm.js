const initialState = {
    username: "",
    password: ""
}

export default function LoginFormReducer(state = initialState
    , action) {
      switch(action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.payload
        default:
          return state;
      }
    };