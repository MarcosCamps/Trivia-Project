import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import token from './token';
import timer from './timeReducer';

const rootReducer = combineReducers({ loginReducer, token, timer });

export default rootReducer;
