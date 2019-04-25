import React, { Component } from 'react';
import {  View, NetInfo } from 'react-native';
import { connect } from 'react-redux';

import { setLocale } from 'react-redux-i18n';
import { setAppLocale } from '../../redux/locales/actionCreators'

import Offline from './components/Offline';
import { withNavigation } from 'react-navigation';
import * as RNLocalize from "react-native-localize";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
    };
  }
  
  componentDidMount() {
    RNLocalize.addEventListener("change", this.handleLocalizationChange);
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange')
  }

  handleLocalizationChange = () => {
    const locale = (RNLocalize.getLocales()[0].isRTL) ? 'ar' : 'en';
    this.props.changeLocale(locale)
    console.log({locale})
  }

  handleConnectivityChange = isConnected => {
    if (this.state.isConnected !== isConnected) this.setState({ isConnected });
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff'  }}>
        {this.props.children}
        {this.state.isConnected || <Offline />}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLocale: (locale) => {
    dispatch(setAppLocale(locale));
    dispatch(setLocale(locale));
  }
})


export default connect(null, mapDispatchToProps)(withNavigation(Container));
