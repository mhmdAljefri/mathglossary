import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { I18n } from 'react-redux-i18n';
import { COLORS } from '../../helpers/ui';

const Message = ({ onPress, message }) => (
  <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>المعذرة يوجد خطاء</Text>
    <Text
      style={{ color: '#b52424' }}
    >{message}</Text>
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <Animatable.Text
        direction="alternate"
        animation="pulse"
        iterationCount="infinite"
        easing="ease-out"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginVertical: 20,
          backgroundColor: '#eee',
          width: 150,
          height: 30,
          lineHeight: 30,
          borderRadius: 15,
        }}
      >{I18n.t('تحديث')}</Animatable.Text>
    </TouchableWithoutFeedback>
  </View>
)

Loader = () => (
  <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
    <ActivityIndicator />
  </View>
)

const NoData = ({ onRefresh, isFetching, ...props }) => (
  isFetching ?
  <Loader /> :
  <Message {...props} onPress={onRefresh} />
);

export default NoData;
