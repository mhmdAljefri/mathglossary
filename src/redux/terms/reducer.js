import { errorHandler } from "../../helpers/api";
import { HOTELS } from '../../assets/demo';
const filters = {
  parking: false,
  resturant: false,
  pool: false,
  elevator: false,
  wifi: false,
  start_price: '',
  end_price: '',
};

const initialState = {
  list: HOTELS,
  details: null,
  pagination: {
    current_page: 1,
    next_page: null,
  },
  fetching: false,
  error: null,
  filters,
};

export default (state = initialState, { type, payload, pushArray }) => {
  switch (type) {
    case 'GET_HOTELS':
      return {
        ...state,
        fetching: true,
      };
  
    case 'GET_HOTELS_FULFILLED':
      const { pagination, hotel_units } = payload.data.data;
      const terms = pushArray ? [
        ...state.terms,
        ...hotel_units,
      ] : hotel_units;
      return {
        ...state,
        fetching: false,
        terms,
        pagination,
        error: '',
      }
  
    case 'GET_HOTELS_REJECTED':
      return {
        ...state,
        fetching: false,
        error: errorHandler(payload),
      }

    case 'GET_HOTEL':
    return {
      ...state,
      fetching: true,
    };

  case 'GET_HOTEL_FULFILLED':
    return {
      ...state,
      fetching: false,
      details: payload.data.data.hotel_unit,
    }

  case 'GET_HOTEL_REJECTED':
    return {
      ...state,
      details: null,
      fetching: false,
      error: errorHandler(payload),
    }

    default:
      return state;
  }
}
