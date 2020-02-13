const initialState = {
    marks1: 65
  };
  
  const reducerStudent = (state = initialState, action) => {
    const updatedState = {...state};
    console.log(action);
    if (action.type === 'IncrementStudent1') {
      return {
        ...state,
        marks1 : state.marks1 + action.marks2
      }
    }
    return updatedState;
  }
  
  export default reducerStudent;