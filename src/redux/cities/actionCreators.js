import axios from 'axios';

export const getCities = (params = {}) => dispatch => {
  dispatch({
    type: 'GET_RECORDS',
  })
  axios.get('cities', { params })
  .then(response => dispatch({
    type: 'GET_RECORDS_FULFILLED',
    payload: response,
  })).catch(error => dispatch({
    type: 'GET_RECORDS_REJECTED',
    payload: error
  }));
};

export const storeCityId = (cityID) => {
  return {
    type: 'STORE_CITY_ID',
    payload: cityID,
  }
}
