import axios from "axios";
import { ToastAndroid, AsyncStorage } from 'react-native'

axios.defaults.baseURL = 'https://api.dev.diar.app/v1/';
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['timeout'] = 8000;

function hitAPI(method = 'GET', route, params ={}, body = {}) {
  const request = axios[method](`${route}`, {
    params,
  }, {
    body
  })
  return request;
}

export const getCity = (params = {}) => {
  const request = hitAPI('get', 'cities', params)
    .catch((error) => ToastAndroid.show(errorHandler(error), ToastAndroid.SHORT))
  return request;
}

export function errorHandler(error) {
  if (!error.response) return 'No Internet connection or Server Error';
  return error.response.message;
}

export default hitAPI;
