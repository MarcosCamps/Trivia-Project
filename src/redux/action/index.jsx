export const USER_LOGIN = 'USER_LOGIN';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_SCORE = 'GET_SCORE';
export const GET_DATA = 'GET_DATA';
export const GET_TIME = 'GET_TIME';
export const NEXT_BUTTON = 'NEXT_BUTTON';

export const loginAction = (name, email) => ({
  type: USER_LOGIN,
  name,
  email,
});

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getScore = (value) => ({
  type: GET_SCORE,
  data: value,
});

export const getData = (value) => ({
  type: GET_DATA,
  data: value,
});

export const timerAction = (value) => ({
  type: GET_TIME,
  data: value,
});

export const disabledAndReset = (value) => ({
  type: NEXT_BUTTON,
  data: value,
});

export const fetchUser = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://opentdb.com/api_token.php?command=request',
    );
    const data = await response.json();
    dispatch(getToken(data.token));
  } catch (error) {
    console.log(error);
  }
};

export const fetchApi = (token) => async (dispatch) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=5&token=${token}`,
  );
  const data = await response.json();
  dispatch(getData(data));
};
