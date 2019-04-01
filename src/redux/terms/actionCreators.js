import Api from '../../helpers/api';

export const getList = (params = {}, pushArray = false) => dispatch => {
  dispatch({
    type: 'GET_MATHWORDS',
  })
  return Api.get('mathwords', { params })
  .then(response => {
    dispatch({
    type: 'GET_MATHWORDS_FULFILLED',
    payload: response,
    pushArray,
  })}
  ).catch((error) => {
    dispatch({
      type: 'GET_MATHWORDS_REJECTED',
      payload: error,
    })
  });
};
