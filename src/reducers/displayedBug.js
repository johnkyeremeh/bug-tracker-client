
export default function DisplayedBug(state = {
    id: null,   
    bug:  null,
    isDisplayed: false}, action)  {

      switch(action.type) {
        
        case "SET_DISPLAY_BUG":
          debugger
            return {...state,
            id: action.payload.id,
            bug: action.payload,
            isDisplayed: !state.isDisplayed}
        case "DISPLAY_CURRENT_BUG":
          return "State "
        case "CLOSE_DISPLAY_BUG":
            return action.payload
        default:
          return state;
      }
    }

