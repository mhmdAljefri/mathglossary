import { createStackNavigator } from 'react-navigation';
import ApplicationsScreen from './List';
import ApplicationDetailsScreen from './Details';

export default createStackNavigator({
  Applications: ApplicationsScreen,
  ApplicationDetails: ApplicationDetailsScreen
});
