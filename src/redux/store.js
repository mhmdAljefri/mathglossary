// redux
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import {
  createReactNavigationReduxMiddleware,  
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

// reducers
import termsReducer from './terms/reducer';
import applicationsReducer from './applications/reducer';
import localesReducer from './locales/reucer';
import expertTeachersReducer from './expertsTeachers/reducer';
import testsitesReducer from './testsites/reducer';
import suggestionLinksReducer from './suggestionLinks/reducer';
import loginReducer from './login/reducer';
import registerReducer from './register/reducer';

import AppNavigator from '../routes';

const persistConfig = {
  key: 'main',
  storage,
  blacklist: ['nav'] // navigation will not be persisted
}

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  i18n: i18nReducer,
  nav: navReducer,
  terms: termsReducer,
  applications: applicationsReducer,
  testsites: testsitesReducer,
  suggestionLinks: suggestionLinksReducer,
  locales: localesReducer,
  teacher: expertTeachersReducer,

  login: loginReducer,
  register: registerReducer,
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewaresContiner = [middleware, promise, thunk]

const persistedReducer = persistReducer(persistConfig, appReducer)

export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewaresContiner)),
  );
  const persistor = persistStore(store)
  syncTranslationWithStore(store)
  return { store, persistor };
}


