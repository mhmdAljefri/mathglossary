import {
  createSwitchNavigator,
} from 'react-navigation';

import Login from './Login';
import Register from './Register';
import Forgot from './Forgot'

export default createSwitchNavigator({
  Login,
  Register,
  Forgot,
});
