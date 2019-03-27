import axios from 'axios';

export const getList = (params = {}, pushArray = false) => dispatch => {
  dispatch({
    type: 'GET_HOTELS',
  })
  axios.get('hotel_units', { params })
  .then(response => dispatch({
    type: 'GET_HOTELS_FULFILLED',
    payload: response,
    pushArray,
  })).catch(error => dispatch({
    type: 'GET_HOTELS_REJECTED',
    payload: error
  }));
};

export const getRecord = (id, params) => dispatch => {
  dispatch({
    type: 'GET_HOTEL',
  })
  axios.get(`hotel_units/${id}`, { params })
  .then(response => dispatch({
    type: 'GET_HOTEL_FULFILLED',
    payload: response,
  })).catch(error => dispatch({
    type: 'GET_HOTEL_REJECTED',
    payload: error
  }));
}
