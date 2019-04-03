import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class Main extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate('Login')
  }
  
  render() {
    return (
      <View>
        <Text>
          main
        </Text>
      </View>
    )
  }
}

export default withNavigation(Main);
