import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getFullWidth } from '../../../helpers/ui';

const width = getFullWidth();

const Offline = () => (
  <View style={styles.offlineContainer}>
    <Text style={styles.offlineText}>No Internet connection</Text>
  </View>
);

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    width
  },
  offlineText: { color: '#fff' }
});

export default Offline;
