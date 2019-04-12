import Api from '../../helpers/api';

export const signin = (params = {}) => dispatch => {
  dispatch({
    type: 'SIGNIN',
  })
  const payload=  Api.post('sessions/signin', params)
  .then(response => dispatch({
    type: 'SIGNIN_FULFILLED',
    payload: response,
  })).catch((error) => dispatch({
    type: 'SIGNIN_REJECTED',
    payload: error,
  }));
  return payload;
};
