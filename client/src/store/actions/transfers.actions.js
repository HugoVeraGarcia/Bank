import axios from 'axios';

import { transfersActions } from '../slices/transfers.slice';

export const getUsersTransfers = userId => {
  const API_URL = `http://localhost:4000/api/v1/users/${userId}/history`;

  return async dispatch => {
    try {
      // API REQUEST
      const res = await axios.get(API_URL);
      console.log('res.data:', res.data);

      const transfers = res.data.transfer;

      dispatch(transfersActions.getTransfers(transfers));
    } catch (error) {
      console.log(error);
    }
  };
};

export const newTransfer = (accountNumber, amount) => {
  return async dispatch => {
    try {
      // API REQUEST
      dispatch(transfersActions.newTransfer());
    } catch (error) {
      console.log(error);
    }
  };
};
