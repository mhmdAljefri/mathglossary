const initialState = {
  fetching: false,
  error: null,
  token: '',
  profile: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'REGISTER':
      return {
        ...state,
        fetching: true,
      };
  
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        fetching: false,
        token: payload.data.token,
        profile: payload.data.data,
        error: '',
      }
  
    case 'REGISTER_REJECTED':
    return {
        ...state,
        fetching: false,
        error: payload,
      }

    default:
      return state;
  }
}
