import React from 'react';
import { View, TextInput } from 'react-native';
import { COLORS } from '../../../helpers/ui';
import Icon from 'react-native-vector-icons/Feather';



const InputWithIcon = ({icon, ...props}) => (
  <View
    style={{
      alignItems: 'center',
      flexDirection: 'row',
      margin: 20,
      backgroundColor: COLORS.primaryWithOpacity,
      paddingHorizontal: 10,
      height: 40,
      borderRadius: 20,
    }}
  >
    <Icon color="#fff" size={20} name={icon} />
    <TextInput
      placeholderTextColor="#fff"
      returnKeyType="next"
      style={{ paddingHorizontal: 10, color: '#fff', flex: 1, }}
      {...props}
    />
  </View>
);

export default InputWithIcon;
