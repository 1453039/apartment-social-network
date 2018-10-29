import { applyMiddleware, createStore } from 'redux';
import allReducer from '../reducers/index.jsx';

export const store = createStore(allReducer);