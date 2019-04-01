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
    //   application_ar: 'الدائرة',
    //   application_description_ar: 'وصف الدائرة',
    //   application_description_en: 'Circle Descritions',
    //   application_en: 'Circle',
    //   application_diagram_ar: '',
    //   application_diagram_en: 'https://res.cloudinary.com/djtqrzqx8/image/upload/f_auto,c_fill/v1546867683/jisr-logo.png',
    //   application_video_ar: '',
    //   application_video_en: 'IQLE1U2M76s',
    // }
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
    case 'GET_TEACHERS':
      return {
        ...state,
        fetching: true,
      };
  
    case 'GET_TEACHERS_FULFILLED':
      const { pagination, teachers } = payload.data;
      const list = pushArray ? [
        ...state.list,
        ...teachers,
      ] : teachers;
      return {
        ...state,
        fetching: false,
        list,
        pagination,
        error: '',
      }
  
    case 'GET_TEACHERS_REJECTED':
    return {
        ...state,
        fetching: false,
        error: payload,
      }

    default:
      return state;
  }
}
