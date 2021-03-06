import Api from '../../helpers/api';

export const getList = (params = {}, pushArray = false) => dispatch => {
  dispatch({
    type: 'GET_APPLICATION',
  })
  return Api.get('applications', { params })
  .then(response => dispatch({
    type: 'GET_APPLICATION_FULFILLED',
    payload: response,
    pushArray,
  })).catch((error) => dispatch({
    type: 'GET_APPLICATION_REJECTED',
    payload: error,
  }));
};
