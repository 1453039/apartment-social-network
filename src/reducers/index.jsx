import { combineReducers } from 'redux';
import headerReducer from './headerReducer.jsx';

const allReducer = combineReducers({
	header: headerReducer
});

export default allReducer;