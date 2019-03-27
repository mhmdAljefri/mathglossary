import React, { Component } from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image';
import logo from '../../assets/img/hotel.jpeg';
import { COLORS } from '../../helpers/ui';
import { I18n } from 'react-redux-i18n';

let win = Dimensions.get('window')

const rediusBox = {
  backgroundColor: '#fff',
  paddingHorizontal: 5,
  borderRadius: 100,
}

const cardHeight = 150;
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: '#000',
    height: cardHeight,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  lable: {
    position: 'absolute',
    top: 5,
    right: 0,
    backgroundColor:COLORS.primary,
    color: '#fff',
    paddingEnd: 20,
    paddingHorizontal: 10,
  },
  description: { color: '#fff' },
  image_background: { position: 'relative', width: '100%',  height: '100%', borderRadius: 10, overflow: 'hidden' },
  content_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: "100%",
    backgroundColor: 'rgba(0,0,0, .5)',
  },
});

export default (props) => {
  const {
    image,
    hotel,
    building,
    description,
    stars,
    onClick,
    type_label,
    price,
    unit_type_label,
    isBuilding,
  } = props;
  
  const handleLayout = (e) => {
    win = Dimensions.get('window')
  }
  const descriptionText = description && description.length > 40 ?
    `${description.slice(0, 40)}...` :
    description;
  return (
    <TouchableWithoutFeedback
      onLayout={handleLayout}
      onPress={onClick}
    >
      <View  style={styles.card}>
        <ImageBackground
          source={image || logo}
          resizeMode='stretch'
          resizeMethod="resize"
          style={styles.image_background}
        >
          <View style={styles.content_container}>
            <Text style={styles.text}>{isBuilding ? building.name : hotel.name}</Text>
            <Text style={styles.description}>{descriptionText}</Text>
            <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={styles.text}>{I18n.t('price')} {price}</Text>          
            </View>
            <Text
              style={styles.lable}
            >
              {unit_type_label}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
