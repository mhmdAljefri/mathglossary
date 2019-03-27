import axios from 'axios';

export const getHotels = (params = {}, pushArray = false) => dispatch => {
  dispatch({
    type: 'GET_BUILDINGS',
  })
  axios.get('building_units', { params })
  .then(response => dispatch({
    type: 'GET_BUILDINGS_FULFILLED',
    payload: response,
    pushArray,
  })).catch(error => dispatch({
    type: 'GET_BUILDINGS_REJECTED',
    payload: error
  }));
};

export const getHotel = (id, params) => dispatch => {
  dispatch({
    type: 'GET_BUILDING',
  })
  axios.get(`building_units/${id}`, { params })
  .then(response => dispatch({
    type: 'GET_BUILDING_FULFILLED',
    payload: response,
  })).catch(error => dispatch({
    type: 'GET_BUILDING_REJECTED',
    payload: error
  }));
}
