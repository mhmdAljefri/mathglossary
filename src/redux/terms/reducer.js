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
  list: [],
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
    case 'GET_MATHWORDS':
      return {
        ...state,
        fetching: true,
      };
  
    case 'GET_MATHWORDS_FULFILLED':
      const { pagination, mathwords } = payload.data.data;
      const terms = pushArray ? [
        ...state.terms,
        ...mathwords,
      ] : mathwords;
      console.log('GET_MATHWORDS_FULFILLED')
      return {
        ...state,
        fetching: false,
        list: terms,
        pagination,
        error: '',
      }
  
    case 'GET_MATHWORDS_REJECTED':
    console.log('GET_MATHWORDS_REJECTED'. error)
    return {
        ...state,
        fetching: false,
        error: errorHandler(payload),
      }

    default:
      return state;
  }
}
