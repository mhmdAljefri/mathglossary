import { createStackNavigator } from 'react-navigation';
import TermsScreen from './List';
import TermDetailsScreen from './Details';

export default createStackNavigator({
  Terms: TermsScreen,
  TermDetails: TermDetailsScreen
});
