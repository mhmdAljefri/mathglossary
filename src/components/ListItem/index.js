import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  }
})

const MyIcon = ({locale}) => {
  const direction = (locale === 'ar') ? 'left' : 'right';
  return (
    <Icon size={20} name={`chevrons-${direction}`} color="#999" />
  )
}

const ListItem = ({ onPress, text, delay, animation = 'fadeIn', locale }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
    >
      <Animatable.View delay={delay} animation={animation} style={style.container}>
        <Text>{text}-{locale}</Text>
        <MyIcon locale={locale} />
      </Animatable.View>
    </TouchableHighlight>
  )
}

const mapStateToProps = ({ locales: { locale } }) => ({
  locale
});

export default connect(mapStateToProps)(ListItem);
