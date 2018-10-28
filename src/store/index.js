import { createStore } from 'redux';
import allReducer from '../reducers/index.jsx';

const store = createStore(allReducer);

export default store;