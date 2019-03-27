import React, { Component } from 'react';
import {
  BackHandler,
  View,
} from 'react-native';
import { I18n } from 'react-redux-i18n';
import Continer from '../../../components/Continer';
import HeaderTitle from '../../../components/HeaderTitle';
import Paragraph from '../../../components/atom/Paragraph';

export default class HotelDetails extends Component {
  static navigationOptions = {
    headerTitle: () => <HeaderTitle title={I18n.t('hotel')} />
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const { defaultData } = this.props.navigation.state.params
    this.props.getRecord(defaultData.id, { locale: 'ar' })
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Hotels')
    return true;
  }

  render() {
    const { details, navigation } = this.props;
    const { defaultData } = navigation.state.params;
    const data = details || defaultData;
    return (
      <Continer style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center', }}>
          <Paragraph color="primary" bold>{data.title}</Paragraph>
          <Paragraph bold>{data.translation}</Paragraph>
          <Paragraph>{data.description}</Paragraph>
        </View>
      </Continer>
    )
  }
}