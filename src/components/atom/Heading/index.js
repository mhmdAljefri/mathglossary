import React from 'react'
import { Text } from 'react-native';

const Heading = ({ children, style = {} }) => (
  <Text style={{ fontWeight: '500', ...style, marginVertical: 5 }}>
    {children}
  </Text>
);

export default Heading;