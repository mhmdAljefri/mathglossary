import React, { Component } from 'react';

import {
  FlatList,
} from 'react-native';
import { I18n } from 'react-redux-i18n';
import _ from 'lodash';
import ListItem from '../../../components/ListItem';
import NoData from '../../../components/NoData';
import Continer from '../../../components/Continer';
import HeaderFilter from '../../../components/HeaderFilter';
import Modal from '../../../components/Modal';
import FeedBack from '../../../components/FeedBack';
import ExpertTeachers from '../../../components/ExpertTeachers';
import HotelFilters from '../../../components/HotelFilters';
import Paragraph from '../../../components/atom/Paragraph';

export default class Hotels extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    }
  }

  state = {
    isModalOpen: false,
    showSearch: false,
  };

  componentDidMount() {
    this.getHotels()
  }

  getHotels = (params, pushArray) => {
    const { getList, filters, cityID, } = this.props;
    const newParams = {
      ...params,
      ...filters,
      city_id: cityID,
      limit: 3,
    };
    getList(newParams, pushArray);
  }

  handleEndReached = () => {
    const { pagination } = this.props;
    if (pagination) {
      if (pagination.next_page) {
        this.getHotels({ page: pagination.next_page }, true)
      }
    }
  }

  showDetails = (item) => {
    this.props.navigation.navigate('TermDetails', { defaultData: item });
  }

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
  }

  render() {
    const { fetching: refreshing, list, error } = this.props;

    return (
      <Continer main>
        <FeedBack onPress={this.toggleModal} />
        <ExpertTeachers onPress={this.toggleModal} />
        <HeaderFilter
          onPressSearchDone={this.getHotels}
          onPressFilter={this.toggleModal}
          title={I18n.t('terms')}
        />
        <Paragraph style={{ padding: 50, textAlign: 'center', fontSize: 22 }}>
          {I18n.t('translate_any_math_term')}
        </Paragraph>
        {(_.isEmpty(list)) ?
          <NoData
            isFetching={refreshing}
            message={error}
            onRefresh={this.getHotels}
          /> :
          <FlatList
            refreshing={refreshing}
            onRefresh={this.getHotels}
            onEndReached={this.handleEndReached}
            onEndReachedThreshold={0.1}
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <ListItem delay={index * 200} onPress={() => this.showDetails(item)} text={item.title} />
            )}
          />
        }
        <Modal
          title={I18n.t('hotel_filters')}
          isOpen={this.state.isModalOpen}
          onClose={this.toggleModal}
        >
          <HotelFilters onSubmit={this.getHotels} />
        </Modal>
      </Continer>
    )
  }
}

