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
  primary: '#71102D',
  secondry: '#8F0C32',
  background: '#F4F3F4',
  light: '#A5A7A6',
  dark: '#5A5B5A',
};
