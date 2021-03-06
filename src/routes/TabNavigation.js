import React from 'react';
import {
  createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../helpers/ui';
import TermsStack from '../screens/Terms';
import ApplicationsStack from '../screens/Applications';
import ProfileStack from '../screens/Profile';
import TestsitesStack from '../screens/Testsites';
import SuggestionLinksStack from '../screens/SuggestionLinks'
import { I18n } from 'react-redux-i18n';

export default createBottomTabNavigator(
  {
    Terms: {
      screen: TermsStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t('terms'),
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="type"
            size={24}
            style={{ color: tintColor }}
          />
        )
      }),
    },
    Testsites: {
      screen: TestsitesStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t('testsites'),
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="check-square"
            size={26}
            style={{ color: tintColor }}
          />
        )
      }),
    },
    SuggestionLinks: {
      screen: SuggestionLinksStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t('suggestion_links'),
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="link"
            size={26}
            style={{ color: tintColor }}
          />
        )
      }),
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t('profile'),
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="user"
            size={26}
            style={{ color: tintColor }}
          />
        )
      }),
    },
  },
  {
    order: ['Terms','Testsites', 'SuggestionLinks', 'Profile'],
    tabBarOptions: {
      activeTintColor: COLORS.primary,
      inactiveTintColor: COLORS.light,
      style: {
        backgroundColor: 'white',
      }
    },
  },
);
