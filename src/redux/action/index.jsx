export const USER_LOGIN = 'USER_LOGIN';
export const GET_USER = 'GET_USER';

export const loginAction = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

export function fetchUser() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://opentdb.com/api_token.php?command=request');
      const data = await response.json();
      dispatch(getUser(data.token));
    } catch (error) {
      console.log(error);
    }
  };
}
