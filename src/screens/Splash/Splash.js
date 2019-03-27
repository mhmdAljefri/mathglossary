import React from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import logo from '../../assets/img/zayed_uni.jpg'
import { I18n } from 'react-redux-i18n';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  logo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
})

export default class Splash extends React.PureComponent {
  state = {
    timeFinshed: false,
  }

  timer = null
  componentDidMount() {
    this.timer = setTimeout(() => this.props.navigation.navigate('Terms'), 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }  

  render() {
    return (
      <View style={style.container}>
        <View style={style.logo}>
          <Image source={logo} style={{ resizeMode: 'cover' }} />
          <Text>{I18n.t('math_is_fun')}</Text>
        </View>
        <ActivityIndicator style={{ marginBottom: 20 }} color="#000" />
      </View>
    )
  }
}