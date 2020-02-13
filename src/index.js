import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider  } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import testReducer from './store/reducer';
import reducerStudent2 from './store/reducerStudent2';
import reducerStudent from './store/reducerStudent';

import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    student1: reducerStudent,
    student2: reducerStudent2
})

const store = createStore(rootReducers, applyMiddleware(thunk));
// const store = createStore(testReducer);
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));