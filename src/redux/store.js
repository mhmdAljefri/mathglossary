// redux
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';

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

import AppNavigator from '../routes';

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
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewaresContiner = [middleware, promise, thunk]

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middlewaresContiner)),
);

syncTranslationWithStore(store)

export default store;
