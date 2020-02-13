// import createStore from 'redux';
const { createStore } = require('redux');

const initialState = {
  marks: 65
};

const testReducer = (state = initialState, action) => {
  const updatedState = {...state};
  
  if (action.type === 'Increment') {
    updatedState.marks += action.value;
  }
  return updatedState;
}

const store = createStore(testReducer);

store.subscribe(() => {
  console.log(store.getState());
})
store.dispatch({ type: 'Increment', value: 5 })
store.dispatch({ type: 'Increment', value: 30 })
