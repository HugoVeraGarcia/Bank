import axios from 'axios';

import { transfersActions } from '../slices/transfers.slice';

export const getUsersTransfers = userId => {
  const API_URL = `http://localhost:4000/api/v1/users/${userId}/history`;

  return async dispatch => {
    try {
      // API REQUEST
      const res = await axios.get(API_URL);

      const transfers = res.data.transfer;

      dispatch(transfersActions.getTransfers(transfers));
    } catch (error) {
      console.log(error);
    }
  };
};

export const newTransfer = credentials => {
  return async dispatch => {
    try {
      // API REQUEST
      const API_URL = 'http://localhost:4000/api/v1/transfers';

      const res = await axios.post(API_URL, credentials);

      const transfers = res.data.transfer;

      dispatch(transfersActions.newTransfer(transfers));
    } catch (error) {
      console.log(error);
    }
  };
};
