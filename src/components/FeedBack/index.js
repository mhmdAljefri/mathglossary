import React, { Component } from 'react'
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather';
import Modal from '../Modal';
import Button from '../atom/Button';
import { COLORS } from '../../helpers/ui';

export default class Main extends Component {
  defaultParams = {
    title: '',
    content: '',
    error: '',
  };
  state = {
    isOpen: false,
    ...this.defaultParams,
  }

  handleChange = (key, text) => this.setState({ [key]: text })
  handleClear = () => {
    Alert.alert('cleared');
    this.setState(this.defaultParams);
  }
  handleSubmit = () => {
    const { title, content } = this.state;
    if (!title || !content) return this.setState({ error: 'Please fill the two fields' })
    Alert.alert('شكراً لإهتمامك :) فريق ديار')
  }
  toggleModal = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const { title, content, error } = this.state;
    return (
      <React.Fragment>
        <Modal
          title="إقتراحك"
          isOpen={this.state.isOpen}
          onClose={this.toggleModal}
        >
          <Text style={{ color: 'red' }}>{error}</Text>
          <TextInput
            style={styles.input}
            placeholder="العنوان"
            value={title}
            autoFocus
            onChangeText={text => this.handleChange('title', text)}
          />
          <TextInput
            multiline
            style={styles.input}
            numberOfLines={5}
            value={content}
            placeholder="الوصف"
            onChangeText={text => this.handleChange('content', text)}
          />
          <Button
            style={styles.button}
            text="مسح"
            color="light"
            onPress={this.handleClear}
          />
          <Button
            style={styles.button}
            text="إرسال"
            color="primary"
            onPress={this.handleSubmit}
          />
        </Modal>
        
        <TouchableHighlight
          onPress={this.toggleModal}
          style={styles.floating_action}
        >
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            duration={400}
          >
            <Icon color="#fff" name="message-circle" size={24} />
          </Animatable.View>
        </TouchableHighlight>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  floating_action: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    backgroundColor: COLORS.primary,
    bottom: 5,
    right: 10,
    height: 50,
    width: 50,
    zIndex: 1000,
    elevation: 4,    
  },
  input: {
    padding: 5,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  button: {
    width: '100%'
  }
})
