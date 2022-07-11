export const updateLoginForm = (formData) => {    
    return {
        type: "UPDATE_LOGIN_FORM",
        payload: formData
    }
}


export const clearLoginForm = () => {
    return {
        type: "CLEAR_LOGIN_FORM"
    }
}