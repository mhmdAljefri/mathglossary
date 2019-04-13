import React, { Component } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import Modal from '../Modal';
import Button from '../atom/Button';
import { COLORS } from '../../helpers/ui';
import { createItem } from '../../redux/suggestionLinks/actionCreators';

class AddSuggetionLink extends Component {
  defaultParams = {
    title_ar: '',
    title_en: '',
    url: '',
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
    const { title_ar, title_en, url } = this.state;
    if (!title_ar || !title_en || !url) return this.setState({ error: 'Please fill fields' })
    this.props.createSuggestionLink({ title_ar, title_en, url: url.toLowerCase() })
    .then(() => {
      Alert.alert(I18n.t('task_done'))
      this.toggleModal();
    })
    .catch(Alert.alert)
  }

  toggleModal = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const { title_ar, title_en, url, error } = this.state;
    return (
      <React.Fragment>
        <Modal
          title={I18n.t('add_suggestion_link')}
          isOpen={this.state.isOpen}
          onClose={this.toggleModal}
        >
          <Text style={{ color: 'red' }}>{error}</Text>
          <TextInput
            style={styles.input}
            placeholder={I18n.t('title_ar')}
            value={title_ar}
            autoFocus
            onChangeText={text => this.handleChange('title_ar', text)}
          />
          <TextInput
            style={styles.input}
            placeholder={I18n.t('title_en')}
            value={title_en}
            onChangeText={text => this.handleChange('title_en', text)}
          />
          <TextInput
            style={styles.input}
            placeholder={I18n.t('url')}
            value={url}
            onChangeText={text => this.handleChange('url', text)}
          />
          <Button
            style={styles.button}
            text="clear"
            color="light"
            onPress={this.handleClear}
          />
          <Button
            style={styles.button}
            text="submit"
            color="primary"
            onPress={this.handleSubmit}
          />
        </Modal>
        
        <TouchableHighlight
          onPress={this.toggleModal}
          style={styles.floating_action}
        >
          <View>
            <Icon color={COLORS.primary} name="plus" size={20} />
          </View>
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
    backgroundColor: '#fff',
    borderRadius: 22.5,
    bottom: 110,
    right: 12.5,
    height: 45,
    width: 45,
    elevation: 4,
    zIndex: 1000,
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

const mapDispatchToProps = (dispatch) => ({
  createSuggestionLink: (data) => dispatch(createItem(data)),
});

export default connect(null, mapDispatchToProps)(AddSuggetionLink);

