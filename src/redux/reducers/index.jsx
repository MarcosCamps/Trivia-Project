import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import timer from './timeReducer';

const rootReducer = combineReducers({ player, token, timer });

export default rootReducer;
