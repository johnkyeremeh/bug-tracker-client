const initialState = {
    summary: "",
    description: "",
    status: "",
    priority: ""
}

export default function bugFormReducer(state = initialState
    , action) {
      switch(action.type) {
        case "UPDATE_BUG_FORM":
            return action.payload;
        case "CLEAR_BUG_FORM":
            return initialState;
        default:
          return state;
      }
    };