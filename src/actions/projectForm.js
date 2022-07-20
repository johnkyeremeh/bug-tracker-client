export const updateProjectForm = (formData) => {    
    return {
        type: "UPDATE_PROJECT_FORM",
        payload: formData
    }
}


export const clearProjectForm = (formData) => {
    return {
        type: "CLEAR_PROJECT_FORM"
    }
}