import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native';
import { withNavigation } from 'react-navigation'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import { I18n } from 'react-redux-i18n';

import { COLORS } from '../../../helpers/ui';
import BG from '../../../assets/img/cyberspace-pink.jpeg'
import InputWithIcon from './InputWithIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'rgba(0,0,0, .5)',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    padding: 10,
    margin: 5,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 50,
  },
  link: {
    color: '#fff',
  },
  button: {
    height: 40,
    backgroundColor: COLORS.primary,
  },
  linksContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginBtn: {
    display: 'flex',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    elevation: 20,
  },
});

const Button = ({text, style, textStyle, onPress, ...restProps }) => (
  <TouchableNativeFeedback {...restProps} onPress={onPress} >
    <View style={style}>
      <Text style={textStyle || styles.link}>{I18n.t(text)}</Text>
    </View>
  </TouchableNativeFeedback>
);

class Container extends React.Component {
  form = {}
  state = {
    fetching: false,
  }
  handleBack = () => this.props.navigation.navigate('Terms');
  handleClickRegistration = () => this.props.navigation.navigate('Register');
  handleClickLogin = () => this.props.navigation.navigate('Login');
  handleClickForget = () => this.props.navigation.navigate('Forgot');

  handleSubmit = () => {
    this.setState({ fetching: true })
    return this.props.onSubmit(this.form)
      .then((res) => {
        this.setState({ fetching: false })
        this.props.navigation.navigate('Profile')
      })
      .catch(() => this.setState({ fetching: false }))
  }

  setFormField = ({ value, key }) => this.form = {...this.form, [key]: value};

  render() {
    const linksListComponents = {
      forget: () => <Button key={1} onPress={this.handleClickForget} text="forget" />,
      registration: () => <Button key={2} onPress={this.handleClickRegistration} text="registration" />,
      login: () => <Button key={3} onPress={this.handleClickLogin} text="login" />
    }
  
    const {
      title = '',
      submitText = 'submit',
      formFields = [],
      buttons = [],
      
    } = this.props;
    const { fetching } = this.state;
    return (
      <Animatable.View animation="slideInRight" >
        <ImageBackground source={BG} style={styles.imageBackground} >
          <View style={styles.container}>
            <Icon onPress={this.handleBack} name="arrow-left" color="#fff" size={24} style={styles.backButton} />
            <ScrollView style={{ marginBottom: 50 }}>
              <Text style={styles.header}>{I18n.t(title)}</Text>
              {formFields.map(({ icon, placeholder, key, ...props }, index) => (
                <InputWithIcon onChangeText={(value) => this.setFormField({ key, value })} key={index} icon={icon} placeholder={I18n.t(placeholder)} {...props} />
              ))}
  
            <View style={{ marginHorizontal: 20, marginVertical: 50, }}>
              <Button
                textStyle={{
                  color: '#fff',
                  fontSize: 18,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
                disabled={fetching}
                style={styles.loginBtn}
                text={fetching ? '...' : submitText}
                onPress={this.handleSubmit}
              />
            </View>
  
            <View style={styles.linksContainer}>
              {buttons.map(button => (
                (typeof linksListComponents[button] === 'function')
                  ? linksListComponents[button]()
                  : false
                )
              )}
            </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </Animatable.View>
    )
  }
};

export default withNavigation(Container);
