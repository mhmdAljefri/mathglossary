import Api from '../../helpers/api';

export const getList = (params = {}, pushArray = false) => dispatch => {
  dispatch({
    type: 'GET_SUGGESTION_LINKS',
  })
  return Api.get('suggestion_links', { params })
  .then(response => dispatch({
    type: 'GET_SUGGESTION_LINKS_FULFILLED',
    payload: response,
    pushArray,
  })).catch((error) => dispatch({
    type: 'GET_SUGGESTION_LINKS_REJECTED',
    payload: error,
  }));
};

export const createItem = (suggestionlink) => dispatch => {
  return Api.post('suggestion_links', { suggestionlink })
  .then(() => dispatch(getList()))
}
