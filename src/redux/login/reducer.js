const initialState = {
  fetching: false,
  error: null,
  token: '',
  profile: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SIGNIN':
    return {
      ...state,
      fetching: true,
      };
  
    case 'SIGNIN_FULFILLED':
      return {
        ...state,
        fetching: false,
        token: payload.data.token,
        profile: payload.data.data,
        error: '',
      }
  
    case 'SIGNIN_REJECTED':
    return {
        ...state,
        fetching: false,
        error: payload,
      }

    case 'LOGOUT':
      return initialState

    default:
      return state;
  }
}
