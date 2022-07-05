
export default function manageUsers(state = {
    user: "",
}, action) {
  console.log(action)
  switch(action.type) {
    case "ADD_USER":
        return state
    default:
      return state
  }
};



