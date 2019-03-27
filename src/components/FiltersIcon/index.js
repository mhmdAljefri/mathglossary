import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../helpers/ui';

const FiltersIcon = ({ checked, text, name, onPress, ...rest }) => {
  const color = checked? '#fff' : '#eee';
  return (
    <TouchableHighlight
      style={{
        padding: 10,
        margin: 2,
        flex: 1,
        flexGrow: 1,
        flexBasis: 80,
        borderRadius: 20,
        backgroundColor: checked ?  COLORS.primary : '#eee',
        opacity: checked ? 1 : .7,
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
        <Icon color={color} name={name} size={20} />
        <Text style={{ color, flex: 1, textAlign: 'center' }}>{text}</Text>
      </View>
    </TouchableHighlight>
    )
}

export default FiltersIcon;
