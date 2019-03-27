import React from 'react';
import { loadTranslations, setLocale } from 'react-redux-i18n';
import { getLoacle } from './helpers/ui';
import { setAppLocale } from './redux/locales/actionCreators'
import Axios from 'axios';


import {
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';

import ar from './translations/ar';
import en from './translations/en';
// Helpers
import './helpers/api';

import AppNavigator from './routes';
import store from './redux/store';

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});



(getDeviceLocale = () => {
  getLoacle().then((i18n) => {
    const locale = i18n || 'ar'
    Axios.defaults.headers.locale = locale;

    store.dispatch(setAppLocale(locale)); // To use it on the rest of this Application
    store.dispatch(loadTranslations({ ar, en }));
    store.dispatch(setLocale(locale));
  });
})();

const AppWithNavigationState = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store} >
    <AppWithNavigationState />
  </Provider>
)
