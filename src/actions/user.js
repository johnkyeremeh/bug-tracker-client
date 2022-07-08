// // import axios from 'axios';

// const CREATE_USER = 'CREATE_USER';
// const CREATE_USER_SUCCESS= 'CREATE_USER';
// const CREATE_USER_ERRORS = 'POST_USER_ERRORS';
// const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

// export const signedUpUser = ({username, email, password}) => (dispatch) => {
//     console.log(username)

//     fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             username,
//             email,
//             password
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//         if (data.user !== undefined) {
//             localStorage.setItem("token", data.jwt)
//             alert("Successfully Signed Up")
//             return dispatch({ type: POST_USER_SUCCESS, payload: data })
//         } else {
//             alert(data.errors.map(error => error))
//             return dispatch({ type: POST_USER_ERRORS, payload: data })
//         }
//     })
//     .catch(err => {
//         alert("Unable to SignUp At This Time")
//         return dispatch({ type: POST_USER_FAILURE, payload: err })
//     })


// }

