import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../helpers/ui';

const FeatureIcon = ({name, title, isActive}) => (
  <View style={{
    flexShrink: 4,
    flexGrow: 1,
    flexDirection: 'row',
    flexBasis: 60,
    margin: 5,
    height: 30,
    borderRadius: 15,
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: isActive ? COLORS.primary : '#eee',
  }}>
    <Icon color={isActive ? '#fff' : '#555'} name={name} size={20} />
    <Text style={{
      marginStart: 4,
      color: isActive ? '#fff' : '#555', 
    }}>{title || 'wifi'}</Text>
  </View>
);

export default FeatureIcon;
