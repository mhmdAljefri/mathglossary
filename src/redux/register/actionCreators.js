import Api from '../../helpers/api';
import { Alert } from 'react-native'

export const signup = (params = {}) => dispatch => {
  dispatch({
    type: 'REGISTER',
  })
  return Api.post('sessions/signup', params)
  .then(response => {
    Alert.success(response.data.message)
    dispatch({
    type: 'REGISTER_FULFILLED',
    payload: response,
  })}).catch((error) => {
    Alert.alert(error || 'خطاء في التسجيل')

    dispatch({
      type: 'REGISTER_REJECTED',
      payload: error,
    })
  });
};
