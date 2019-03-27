import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native';
import { COLORS } from '../../../helpers/ui';

const Contact = ({ url, label, color = COLORS.primary, text }) => (
  <TouchableHighlight
    onPress={() => Linking.openURL(url)}
  >
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    }}>
      <Text>{label}</Text>
      <Text>{text}</Text>
    </View>
  </TouchableHighlight>
);


export default Contact;