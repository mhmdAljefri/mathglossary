import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import logo from '../../assets/img/diarlogo.png';

export default ({
  latitude,
  longitude,
}) => {
  const position = {
    latitude: parseFloat(latitude) || 37.78825,
    longitude: parseFloat(longitude) || -122.4324,
  };
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={StyleSheet.absoluteFillObject}
      region={{
        ...position,
        latitudeDelta: 0.05,
        longitudeDelta: 0.011,
      }}
    >
      <Marker
        coordinate={position}
        title={'marker.title'}
        // description={marker.description}
      />
    </MapView>
  );
};