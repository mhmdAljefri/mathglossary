import React, { Component } from 'react';
import { Text, View, Image, ToolbarAndroid } from 'react-native';
import logo from '../../assets/img/diar_30px.jpg';

export default (props) => {
  const { title } = props;
    return (
      <View style={{
        display: 'flex',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ paddingHorizontal: 10 }}>
          {title}
        </Text>
      </View>
    )
  }
