import Axios from "axios";
import { I18n } from 'react-redux-i18n';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'locale': 'ar',
  'access': 'mobile',
};

const http = Axios.create({
  baseURL: 'https://mathglossary-api.herokuapp.com/v1/',
  headers,
});

// Axios.defaults.headers = headers();
http.interceptors.response.use(null, ({ response }) => {
  let error = '';
  if (response) error = response.data.error;
  else error = I18n.t('Please contact admin');
  return Promise.reject(error);
});

export default http;
