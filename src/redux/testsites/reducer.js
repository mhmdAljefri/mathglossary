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
    case 'GET_TESTSITES':
      return {
        ...state,
        fetching: true,
      };
  
    case 'GET_TESTSITES_FULFILLED':
      const { pagination, testsites } = payload.data;
      const list = pushArray ? [
        ...state.list,
        ...testsites,
      ] : testsites;
      return {
        ...state,
        fetching: false,
        list,
        pagination,
        error: '',
      }
  
    case 'GET_TESTSITES_REJECTED':
      return {
          ...state,
          fetching: false,
          error: payload,
        }

    default:
      return state;
  }
}
