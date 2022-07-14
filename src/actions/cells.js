
export const setDisplayedBug = (bug) => {
    return {
        type: "SET_DISPLAY_BUG",
        payload: bug
    }
}

export const displayBug = (bug) => { 
    return {
        type: "DISPLAY_BUG",
        payload: bug
    }
}


