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
  list: [
    // {
    //   term_ar: 'الدائرة',
    //   term_description_ar: 'وصف الدائرة',
    //   term_description_en: 'Circle Descritions',
    //   term_en: 'Circle',
    // }
  ],
  details: null,
  pagination: {
    current_page: 1,
    next_page: null,
  },
  fetching: false,
  error: null,
  message: '',
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
      const { pagination, mathwords, message } = payload.data;
      const terms = pushArray ? [
        ...state.list,
        ...mathwords,
      ] : mathwords;
      return {
        ...state,
        fetching: false,
        list: terms,
        pagination,
        error: '',
        message,
      }
  
    case 'GET_MATHWORDS_REJECTED':
    return {
        ...state,
        fetching: false,
        error: payload,
      }

    default:
      return state;
  }
}
