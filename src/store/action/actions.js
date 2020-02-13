
export const marksIncrement1 = (val) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(marksIncrementdispatch(val))
        }, 3000)
    }
};

export const marksIncrementdispatch = (val) => {
    return {  type: 'IncrementStudent1', marks2: val }
}



export const marksIncrement2 = (val) => {
    return { type: 'IncrementStudent2', marks1: val }
};