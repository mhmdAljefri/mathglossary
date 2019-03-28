import React from 'react';
import {
  createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../helpers/ui';
import TermsStack from '../screens/Terms';
import { I18n } from 'react-redux-i18n';

export default createBottomTabNavigator(
  {
    Terms: {
      screen: TermsStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t('terms'),
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'pause' : 'pause'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }),
    },
  },
  {
    order: ['Terms'],
    tabBarOptions: {
      activeTintColor: COLORS.primary,
      inactiveTintColor: '#d0d0d0',
      style: {
        backgroundColor: 'white',
      }
    },
  },
);
