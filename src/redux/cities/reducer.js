import { errorHandler } from "../../helpers/api";
import { CITIES } from "../../assets/demo";
const initialState = {
  cities: CITIES,
  city: {},
  cityID: null,
  fetching: false,
  error: null,
}

export default function cityReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_RECORDS':
      return {
        ...state,
        fetching: true,
      };
  
    case 'GET_RECORDS_FULFILLED':
      return {
        ...state,
        fetching: false,        
        cities: payload.data.data.cities,
      }
  
    case 'GET_RECORDS_REJECTED':
      return {
        ...state,
        fetching: false,
        error: errorHandler(payload)
      }

    case 'SELECT_CITY':
      return {
        ...state,
        city: payload,
      };

    case 'STORE_CITY_ID':
      return {
        ...state,
        cityID: payload,
      }

    default:
      return state;
  }
}