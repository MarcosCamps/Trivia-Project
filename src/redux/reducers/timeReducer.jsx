import { GET_TIME, NEXT_BUTTON } from '../action/index';

const INITIAL_STATE = {
  time: 30,
  isDisebledBtnNext: true,
  isDisebledBtnQuestion: false,
};

const timer = (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
  case GET_TIME:
    return {
      ...state,
      time: data < 1 ? 0 : data - 1,
      isDisebledBtnQuestion: data === 0,
      isDisebledBtnNext: data !== 0,
    };
  case NEXT_BUTTON:
    return { ...INITIAL_STATE };
  default:
    return state;
  }
};

export default timer;
