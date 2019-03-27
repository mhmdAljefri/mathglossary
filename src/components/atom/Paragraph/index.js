import React from 'react'
import { Text } from 'react-native';
import { COLORS } from '../../../helpers/ui';

const Paragraph = ({ color, children, bold, style }) => (
  <Text style={{
    marginBottom: 5 ,
    fontWeight: bold ? '600' : '400',
    fontSize: bold && 22,
    color: color && COLORS[color],
    ...style,
  }}>{children}</Text>
);

export default Paragraph;
