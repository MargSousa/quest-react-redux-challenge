import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';

const RootReducer = combineReducers({
	counter: CounterReducer,
});

export default RootReducer;