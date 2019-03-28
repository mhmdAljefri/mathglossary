import Axios from "axios";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'locale': 'ar',
  'access': 'admin',
};

const http = Axios.create({
  baseURL: 'https://mathglossary-api.herokuapp.com/v1/',
  headers,
});

// Axios.defaults.headers = headers();
http.interceptors.response.use(null, ({ response }) => {
  const { store } = createStore()
  let error = '';
  if (response.status === 401) store.dispatch({ type: 'LOGOUT' });
  if (response) error = response.data.error;
  else {
    if (window.navigator.onLine) error = 'Application Error';
    else error = I18n.t('No Internet Connection');
  }
  return Promise.reject(error);
});

export default http;
