import { GET_USER, USER_LOGIN } from '../action/index';

const INITIAL_STATE = {
  email: '',
  token: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      email: action.payload,
    };
  case GET_USER:
    return {
      ...state,
      token: action.payload,
    };

  default:
    return state;
  }
}

export default loginReducer;
