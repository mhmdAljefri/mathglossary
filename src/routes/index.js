import {
  createSwitchNavigator,
} from 'react-navigation';

import TabStack from './TabNavigation';

// Screeens
import SplashScreen from '../screens/Splash';

export default createSwitchNavigator(
  {
    AuthLoading: SplashScreen,
    Auth: TabStack,
  },
  {
    initialRouteName: 'AuthLoading',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 3000,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);

