import { Dimensions, NativeModules, Platform } from 'react-native';

export const getFullWidth = () => {
  return Dimensions.get('window').width;
}

export const getLoacle = async () => {
  let local = '';
  try {
    if (Platform.OS === 'ios') {
      local = await NativeModules.SettingsManager.settings.AppleLocale // "fr_FR"
      return local;
    }
    local = await NativeModules.I18nManager.localeIdentifier;
  }
  catch(e) {
    // console.error(e)
    local = 'ar';
  }
  return local.slice(0, 2);
};


export const COLORS = {
  primary: '#387b94',
  secondry: '#575989'
};
