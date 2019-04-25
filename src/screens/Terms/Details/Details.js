import React, { Component } from 'react';
import {
  BackHandler,
  TouchableNativeFeedback,
  View,
  Linking,
} from 'react-native';
import { I18n } from 'react-redux-i18n';
import Continer from '../../../components/Continer';
import HeaderTitle from '../../../components/HeaderTitle';
import Paragraph from '../../../components/atom/Paragraph';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../helpers/ui';

export default class HotelDetails extends Component {
  static navigationOptions = {
    headerTitle: () => <HeaderTitle title={I18n.t('terms')} />
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Terms')
    return true;
  }

  showDetails = (url) => url && Linking.openURL(url);

  render() {
    const { navigation, locale } = this.props;
    const { defaultData: data } = navigation.state.params;
    const toTransateLang = locale == 'ar' ? 'en' : 'ar';
    const currentLang = locale == 'ar' ? 'ar' : 'en'; // to avoid anoth language such chiense and so on.
    return (
      <Continer style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center', }}>
          <Paragraph color="primary" bold>{data[`term_${currentLang}`]}</Paragraph>
          <Paragraph bold>{data[`term_${toTransateLang}`]}</Paragraph>
          <Paragraph center>{data[`term_description_${currentLang}`]}</Paragraph>

          {!!data.link && (<View style={{ flexDirection: 'row', margin: 10, padding: 10, elevation: 2, borderRadius: 15, backgroundColor: '#eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <TouchableNativeFeedback onPress={() => this.showDetails(data.link)}>
              <View><Icon color={COLORS.primary} size={24} name="external-link" /></View>
            </TouchableNativeFeedback>
          </View>)}
        </View>
      </Continer>
    )
  }
}