import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { I18n } from 'react-redux-i18n';

export default class Searchbar extends Component {
  componentWillUnmount() {
    clearTimeout(this.timer)    
  }

  timer = null
  handleTextChange = (data) => {
    clearTimeout(this.timer)
    const key = this.props.name || 'search';
    this.timer = setTimeout(() => this.props.onSubmit({ [key]: data }), 1500)
  }

  render() {
    const { style, color, focused, ...props } = this.props;
    return (
      <View style={ style || { alignItems: 'center', flexDirection: 'row', margin: 10, backgroundColor: '#eee', height: 40, borderRadius: 20, }}>
      <View style={{ padding: 5 }}>
        <Icon color={color} size={20} name="search" />
      </View>
      <TextInput
        {...props}
        style={{ color }}
        placeholderTextColor={color}
        ref={this.input}
        placeholder={I18n.t('search_hint')}
        onChangeText={this.handleTextChange}
        returnKeyType="search"
      />
    </View>
    )
  }
}