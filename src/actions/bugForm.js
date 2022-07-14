export const updateBugForm = (formData) => {    
    return {
        type: "UPDATE_BUG_FORM",
        payload: formData
    }
}


export const clearBugForm = (formData) => {
    return {
        type: "CLEAR_BUG_FORM"
    }
}