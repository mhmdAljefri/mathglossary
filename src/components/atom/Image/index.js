import React from 'react';
import { View, Text, TouchableNativeFeedback, Image as NativeImage } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { I18n } from 'react-i18nify';
import GreatModal from '../../Modal';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
export default class Image extends React.Component {
  state= { isOpen: false }
  onBuffer = () => {}
  videoError = () => {}
  openImage = () => this.setState({ isOpen: true })
  colseImage = () => this.setState({ isOpen: false })

  render() {
    const { url: uri } = this.props;

    return (
      <View>
        <TouchableNativeFeedback onPress={this.openImage}>
          <View style={{ margin: 10, padding: 10, width: 100, height: 80, borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', elevation: .5 }}>
            <Icon color="green" size={28} name="image" />
            <Text>{I18n.t('open')}</Text>
          </View>
        </TouchableNativeFeedback>
        <GreatModal
          isOpen={this.state.isOpen}
          onClose={this.colseImage}
        >
          <View style={{ height: 400, justifyContent: 'center', alignItems: 'center', }}>
            <NativeImage
              resizeMode="contain"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              source={{ uri }}
            />
          </View>
        </GreatModal>
      </View>

    )
  }
}
