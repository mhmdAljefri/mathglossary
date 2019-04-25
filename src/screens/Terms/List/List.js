import React, { Component } from 'react';

import {
  FlatList,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { I18n } from 'react-redux-i18n';
import _ from 'lodash';
import ListItem from '../../../components/ListItem';
import Continer from '../../../components/Continer';
import HeaderFilter from '../../../components/HeaderFilter';
import Modal from '../../../components/Modal';
import FeedBack from '../../../components/FeedBack';
import ExpertTeachers from '../../../components/ExpertTeachers';
import HotelFilters from '../../../components/HotelFilters';
import Paragraph from '../../../components/atom/Paragraph';
import SearchBar from '../../../components/Searchbar';

export default class List extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    }
  }

  state = {
    isModalOpen: false,
    showSearch: false,
    keyboardHidden: true,
    search: '',
  };

  componentDidMount () { 
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ keyboardHidden: false })
  }

  _keyboardDidHide = () => {
    this.setState({ keyboardHidden: true })
  }

  handleGetList = (params, pushArray) => {
    const { getList } = this.props;
    const { search } = this.state
    getList({ search, ...params }, pushArray);
  }

  handleEndReached = () => {
    const { pagination } = this.props;
    if (pagination) {
      if (pagination.next_page) {
        this.handleGetList({ page: pagination.next_page }, true)
      }
    }
  }

  showDetails = (item) => {
    this.props.navigation.navigate('TermDetails', { defaultData: item });
  }

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
  }

  wrapView = node => this.view = node;

  render() {
    const { fetching, list, error, message } = this.props;
    const { keyboardHidden } = this.state;

    return (
      <Continer main>
        <FeedBack onPress={this.toggleModal} />
        <ExpertTeachers onPress={this.toggleModal} />
        <HeaderFilter
          onPressSearchDone={this.handleGetList}
          onPressFilter={this.toggleModal}
          title={I18n.t('terms')}
        />
        <Animatable.View
          ref={this.wrapView}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Paragraph style={{ padding: keyboardHidden ? 50 : 5, textAlign: 'center', fontSize: 22 }}>
            {I18n.t('translate_any_math_term')}
          </Paragraph>
        </Animatable.View>

        <Animatable.View>
          <SearchBar
            fetching={fetching}
            name="name"
            onChangeText={search => this.setState({ search })}
            onSubmit={this.handleGetList}
          />
        {(!_.isEmpty(list)) ? (
          <FlatList
            refreshing={fetching}
            onRefresh={this.handleGetList}
            onEndReached={this.handleEndReached}
            onEndReachedThreshold={0.1}
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <ListItem delay={200} onPress={() => this.showDetails(item)} textObject={{ en: item.term_en, ar: item.term_ar }} />
            )}
          />
        )
        : <Paragraph style={{textAlign: 'center', }}>{error || message}</Paragraph>}
        </Animatable.View>
        <Modal
          title={I18n.t('hotel_filters')}
          isOpen={this.state.isModalOpen}
          onClose={this.toggleModal}
        >
          <HotelFilters onSubmit={this.handleGetList} />
        </Modal>
      </Continer>
    )
  }
}

