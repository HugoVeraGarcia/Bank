import axios from 'axios';

import { usersActions } from '../slices/user.slice';

const API_URL = 'http://localhost:4000/api/v1/users/login';

export const login = credentials => {
  return async dispatch => {
    try {
      // API REQUEST
      const res = await axios.post(API_URL, credentials);

      const user = res.data.user;

      dispatch(usersActions.login(user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = credentials => {
  return async dispatch => {
    try {
      const API_URL2 = 'http://localhost:4000/api/v1/users/signup';

      // API REQUEST
      await axios.post(API_URL2, credentials);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      dispatch(usersActions.logout());
    } catch (error) {
      console.log(error);
    }
  };
};
