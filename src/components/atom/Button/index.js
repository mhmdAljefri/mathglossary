import React from 'react'
// import PropTypes from 'prop-types';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { COLORS } from '../../../helpers/ui';
import { View } from 'react-native-animatable';
import { I18n } from 'react-redux-i18n';

// Button.propTypes = {
//   color: PropTypes.checkPropTypes(PropTypes.oneOf([
//     'primary',
//     'secondry',
//     'light',
//     'dark',
//   ])),
// };

const Button = ({ text, style, color, ...props }) => {
  const fontColor = switchColor(color);
  const backgroundColor = switchBG(color);
  return (
    <TouchableHighlight
      {...props}
      style={{
        ...styles.button,
        ...style,
        backgroundColor,
      }}
    >
      <View style={{ color: fontColor }}><Text>{I18n.t(text)}</Text></View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    alignItems: 'center',
    margin: 5,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 10,
  },
})

export default Button;


function switchColor(color) {
  switch (color) {
    case 'primary':
    case 'secondry':
    case 'dark':
      return '#fff';  
    default:
      return "#555";
  }
}

function switchBG(color) {
  switch (color) {
    case 'primary':
      return COLORS.primary;
    case 'secondry':
      return COLORS.secondry
    case 'dark':
      return '#555';  
    default:
      return "#eee";
  }
}