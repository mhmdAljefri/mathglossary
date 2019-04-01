import Api from '../../helpers/api';

export const getList = (params = {}, pushArray = false) => dispatch => {
  dispatch({
    type: 'GET_TEACHERS',
  })
  return Api.get('teachers', { params })
  .then(response => dispatch({
    type: 'GET_TEACHERS_FULFILLED',
    payload: response,
    pushArray,
  })).catch((error) => dispatch({
    type: 'GET_TEACHERS_REJECTED',
    payload: error,
  }));
};
