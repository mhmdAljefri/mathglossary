import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../../../helpers/ui';

export default class NumbricInput extends Component {
  state = {
    error: false,
    myNumber: '',
    isFocused: false
  }
  checkNumber = (text) => {
    let newText = '';
    let numbers = '0123456789';

    for (let i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ) {
          newText = newText + text[i];
      }
      else {
        // your call back function
        return this.setState({ error: true })
      }
    }
    this.setState({ myNumber: newText, error: false });
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
  }

  handleBulr = () => {
    this.setState({ isFocused: false })
  }

  render() {
    const { error, myNumber, isFocused } = this.state;
    return (
      <View
        style={{
          height: 40,
          flex: 1,
          borderBottomWidth: 1,
          borderBottomColor: isFocused ? COLORS.primary : '#eee',
          marginBottom: 5,
          marginEnd: 5,
        }}
      >
        <TextInput
          {...this.props}
          style={{ flex: 1 }}
          value={myNumber}
          onFocus={this.handleFocus}
          onBlur={this.handleBulr}
          onChangeText={this.checkNumber}
        />
      </View>
    )
  }
}