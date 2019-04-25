import Axios from "axios";
import { I18n } from 'react-redux-i18n';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'locale': 'ar',
  'access': 'mobile',
};

const baseURL = 'https://mathglossary-api.herokuapp.com/v1/';

const http = Axios.create({
  baseURL,
  headers,
});

export const fetchApi = () => {
  fetchWrapper = (endPoint, method, params, data) => {
    return new Promise((resolve, reject) => (
      fetch(baseURL + endPoint, {
        method,
        headers,
        params: JSON.stringify(params),
        body: JSON.stringify(data),
      }).then(response => response.json())
      .then(response => resolve(response))
      .catch(error => reject(error))
    ));
  }

  return {
    post: (endPoint, params, data) => fetchWrapper(endPoint, 'POST', params, data),
    get:  (endPoint, params, data) => fetchWrapper(endPoint, 'GET', params, data),
    put:  (endPoint, params, data) => fetchWrapper(endPoint, 'PUT', params, data),
    delete:  (endPoint) => fetchWrapper(endPoint, 'DELETE'),
  };
}

// Axios.defaults.headers = headers();
http.interceptors.response.use(null, ({ response }) => {
  let error = '';
  if (response) error = response.data.error;
  else error = I18n.t('Please contact admin');
  return Promise.reject(error);
});

export default http;
