import React from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather';
import { withNavigation } from 'react-navigation'

import { I18n } from 'react-redux-i18n';
import Paragraph from '../../components/atom/Paragraph';
import logo from '../../assets/img/zayed_uni.jpg'
import { COLORS } from '../../helpers/ui';

const LabeldIcon = ({ label, icon }) => (
  <View
    style={{
      margin: 10,
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      flexDirection: 'row',
      backgroundColor: '#fff',
      elevation: 1,
    }}
  >
    <Icon style={{ paddingEnd: 10 }} name={icon} size={20} color={COLORS.primary} />
    <Paragraph style={{ color: COLORS.light, marginHorizontal: 10 }}>{label}</Paragraph>
  </View>
)

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  header: {
    height: 200,
    backgroundColor: COLORS.primary,
    elevation: 4,
    position: 'relative',
    alignItems: 'center',
    marginBottom: 150,
  },
  info: {
    position: 'absolute',
    top: 150,
    display: 'flex',
    alignItems: 'center',
  },
  logout: {
    padding: 10,
    margin: 5,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  imageContainer: {
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 50,
    elevation: 6,
  },
});

class Profile extends React.Component {
  handleLogout = () => {
    console.log('logout clicked')
    this.props.onLogout();
    this.props.navigation.navigate('Profile')
  }
  render() {
    const { data, onLogout } = this.props;
    
    return (
      <View style={style.container}>
        <ScrollView>
          <Animatable.View
            animation="fadeIn"
            delay={2000}
            style={style.header}
          >
            <TouchableNativeFeedback style={style.logout} onPress={this.handleLogout}>
              <View>
                <Icon color="#fff" size={24} name="log-out" />
              </View>
            </TouchableNativeFeedback>
            <Image source={logo} style={{ width: '100%', resizeMode: 'cover', opacity: .05 }}/>
            <View style={style.info}>
              <View style={style.imageContainer}>
                <Image source={logo} style={{ width: 100, height: 100, resizeMode: 'cover' }} />
              </View>
              <Paragraph bold>{data.name}</Paragraph>
            </View>
          </Animatable.View>
          <View>
            <LabeldIcon icon="mail" label={data.email} />
            <LabeldIcon icon="phone" label={data.mobile} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default withNavigation(Profile);