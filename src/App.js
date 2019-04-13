import React from 'react';
import { Text } from 'react-native';
import { loadTranslations, setLocale } from 'react-redux-i18n';
import { getLoacle } from './helpers/ui';
import { setAppLocale } from './redux/locales/actionCreators'
import Axios from 'axios';


import {
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import ar from './translations/ar';
import en from './translations/en';
// Helpers
import './helpers/api';

import AppNavigator from './routes';
import storeCreatore from './redux/store';

const { store, persistor } = storeCreatore();

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});

(() => {
  getLoacle().then((i18n) => {
    const locale = i18n || 'en'
    console.log({locale})
    Axios.defaults.headers.locale = locale;

    store.dispatch(setAppLocale(locale)); // To use it on the rest of this Application
    store.dispatch(loadTranslations({ ar, en }));
    store.dispatch(setLocale(locale));
  });
})();

const AppWithNavigationState = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store} >
    <PersistGate loading={<Text>...</Text>} persistor={persistor}>
      <AppWithNavigationState />
    </PersistGate>
  </Provider>
)
