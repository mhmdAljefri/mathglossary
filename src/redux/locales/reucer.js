const initialState = {
  locale: 'ar',
}
export default function localeReducer(state = initialState,{ type, payload }) {
  switch (type) {
    case 'SET_APP_LOCALE':
      return { ...state, locale: payload };
  
    default:
      return state;
  }
}