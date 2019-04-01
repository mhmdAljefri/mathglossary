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
    {
      name_ar: 'الدائرة',
      name_en: 'الدائرة',
      description_ar: 'وصف الدائرة',
      description_en: 'Circle Descritions',
      application_en: 'Circle',
      application_diagram_ar: '',
      url_en: 'https://res.cloudinary.com/djtqrzqx8/image/upload/f_auto,c_fill/v1546867683/jisr-logo.png',
      url_ar: 'https://res.cloudinary.com/djtqrzqx8/image/upload/f_auto,c_fill/v1546867683/jisr-logo.png',
      application_video_ar: '',
      application_video_en: 'IQLE1U2M76s',
    }
  ],
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
