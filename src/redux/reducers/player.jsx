import { USER_LOGIN, GET_SCORE, GET_DATA } from '../action/index';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
  data: [],
};

const player = (state = INITIAL_STATE, action) => {
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
      score: state.score + action.score,
    };
  case GET_DATA:
    return {
      ...state,
      data: action.data.results,
    };
  default:
    return state;
  }
};
export default player;
