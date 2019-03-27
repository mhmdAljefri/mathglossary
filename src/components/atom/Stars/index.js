import React from 'react';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../helpers/ui';

const Stars = ({ count }) => (
  <View style={{
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomEndRadius: 10,
  }}>
    {[...Array(5)].map((item, key) => {
      if (key >= count) return <Icon key={key} color="#eee" name="star" size={20} />
      return <Icon key={key} color="yellow" name="star" size={20} />
    })}
  </View>
);

export default Stars;
