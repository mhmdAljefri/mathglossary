import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator
} from 'react-native';
import { I18n } from 'react-redux-i18n';
import { COLORS } from '../../helpers/ui';

const Message = ({ onRefresh, message }) => (
  <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
    {!!message  ? (
      <React.Fragment>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>المعذرة يوجد خطاء</Text>
        <Text
          style={{ color: '#b52424' }}
        >
          {message}
        </Text>
      </React.Fragment>)
      : (
        <React.Fragment>
          <Text>{I18n.t('no_data')}</Text>
        </React.Fragment>
    )}
    <TouchableNativeFeedback
      onPress={() => console.log({onRefresh})}
    >
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginVertical: 20,
          color: COLORS.primary,
          elevation: .5,
          width: 150,
          height: 30,
          lineHeight: 30,
          borderRadius: 15,
        }}
      ><Text>{I18n.t('refresh')}</Text></View>
    </TouchableNativeFeedback>
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
