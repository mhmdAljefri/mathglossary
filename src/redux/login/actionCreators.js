import Api from '../../helpers/api';
import { Alert } from 'react-native';

export const signin = (params = {}) => dispatch => {
  dispatch({
    type: 'SIGNIN',
  })
  const payload=  Api.post('sessions/signin', params)
  .then(response => dispatch({
    type: 'SIGNIN_FULFILLED',
    payload: response,
  })).catch((error) => {
    Alert.alert(error)
    dispatch({
    type: 'SIGNIN_REJECTED',
    payload: error,
  })});
  return payload;
};
