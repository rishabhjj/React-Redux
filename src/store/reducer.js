const initialState = {
  marks: 65
};

const testReducer = (state = initialState, action) => {
  const updatedState = {...state};
  console.log(action);
  if (action.type === 'Increment') {
    console.log(typeof action.value)
    updatedState.marks += action.value;
  }
  if (action.type === 'Decrement') {
    updatedState.marks -= action.value;
  }
  return updatedState;
}

export default testReducer;