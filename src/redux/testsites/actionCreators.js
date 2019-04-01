import Api from '../../helpers/api';

export const getList = (params = {}, pushArray = false) => dispatch => {
  dispatch({
    type: 'GET_TESTSITES',
  })
  console.log('GET_TESTSITES')
  return Api.get('testsites', { params })
  .then(response => dispatch({
    type: 'GET_TESTSITES_FULFILLED',
    payload: response,
    pushArray,
  })).catch((error) => dispatch({
    type: 'GET_TESTSITES_REJECTED',
    payload: error,
  }));
};
