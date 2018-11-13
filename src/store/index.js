import { applyMiddleware, createStore } from 'redux';
import allReducer from '../reducers/index.jsx';
import thunk from 'redux-thunk';

export const store = createStore(allReducer, applyMiddleware(thunk));