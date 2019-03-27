import React, { Component } from 'react';
import {  View, Text, NetInfo, BackHandler } from 'react-native';
import Offline from './components/Offline';
import { withNavigation } from 'react-navigation';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange')
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


export default withNavigation(Container);
