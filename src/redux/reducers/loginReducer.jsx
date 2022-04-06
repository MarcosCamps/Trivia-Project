import { USER_LOGIN, GET_SCORE } from '../action/index';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
};
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      email: action.email,
      name: action.name,
    };
  case GET_SCORE:
    return {
      ...state,
      score: action.score,
    };
  default:
    return state;
  }
};
export default loginReducer;
