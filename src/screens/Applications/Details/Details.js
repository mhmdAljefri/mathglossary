import React, { Component } from 'react';
import {
  BackHandler,
  View,
} from 'react-native';
import { I18n } from 'react-redux-i18n';
import Continer from '../../../components/Continer';
import HeaderTitle from '../../../components/HeaderTitle';
import Paragraph from '../../../components/atom/Paragraph';
import Video from '../../../components/atom/Video';
import Image from '../../../components/atom/Image';

export default class HotelDetails extends Component {
  static navigationOptions = {
    headerTitle: () => <HeaderTitle title={I18n.t('hotel')} />
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Applications')
    return true;
  }

  render() {
    const { navigation, locale } = this.props;
    const { defaultData: data } = navigation.state.params;
    const currentLang = locale == 'ar' ? 'ar' : 'en'; // to avoid another language such non en or ar and so on.
    const video = data[`application_video_${currentLang}`];
    const diagram = data[`application_diagram_${currentLang}`];
    const title = data[`application_${currentLang}`];
    const description = data[`application_description_${currentLang}`];

    return (
      <Continer>
        <View style={{ flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center', }}>
          <Paragraph color="primary" bold>{title}</Paragraph>
          <Paragraph>{description}</Paragraph>
          {!!video && <Video videoId={video} />}
          {!!diagram && <Image url={diagram} />}
        </View>
      </Continer>
    )
  }
}