const initialState = {
    marks2: 65
  };
  
  const reducerStudent2 = (state = initialState, action) => {
    const updatedState = {...state};
    if (action.type === 'IncrementStudent2') {
      return {
        ...state,
        marks2 : state.marks2 + action.marks1
      }
    }
    return updatedState;
  }
  
  export default reducerStudent2;