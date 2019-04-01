import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { YouTubeStandaloneAndroid } from 'react-native-youtube';
import Icon from 'react-native-vector-icons/Feather';
import { I18n } from 'react-i18nify';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
export default ({ videoId }) => {
  onBuffer = () => {}
  videoError = () => {}
  openVideo = () => YouTubeStandaloneAndroid.playVideo({
    apiKey: 'AIzaSyAnh1BR7ZuWzgUeO3JdG5BwYrZMS_n9WXs',
    videoId,
  });
  return (
    <View>
      <TouchableNativeFeedback onPress={openVideo}>
        <View style={{ margin: 10, padding: 10, width: 100, height: 80, borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', elevation: .5 }}>
          <Icon color="red" size={28} name="youtube" />
          <Text>{I18n.t('play')}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
