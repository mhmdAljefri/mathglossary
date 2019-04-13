import React, { Component } from 'react';

import {
  FlatList,
  Linking,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import { I18n } from 'react-redux-i18n';
import _ from 'lodash';
import NoData from '../../../components/NoData';
import Continer from '../../../components/Continer';
import HeaderFilter from '../../../components/HeaderFilter';
import FeedBack from '../../../components/FeedBack';
import ExpertTeachers from '../../../components/ExpertTeachers';
import Paragraph from '../../../components/atom/Paragraph';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../helpers/ui';


export default class List extends Component {
  renderListItem = ({item}) => {
    const currentLocale = this.props.locale === 'ar' ? 'ar' : 'en';
    const url = item[`url_${currentLocale}`]
    return (
      <View style={{ flexDirection: 'row', margin: 10, padding: 10, elevation: 2, borderRadius: 15, backgroundColor: '#eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        <View>
          <Text>{item[`name_${currentLocale}`]}</Text>
          <Text>{item[`description_${currentLocale}`]}</Text>
        </View>
        <TouchableNativeFeedback onPress={() => this.showDetails(url)}>
          <View><Icon color={COLORS.primary} size={24} name="external-link" /></View>
        </TouchableNativeFeedback>
      </View>
    )
  }
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
    this.handleGetList()
  }

  handleGetList = (params, pushArray) => {
    const { getList, filters, } = this.props;
    const newParams = {
      ...params,
      ...filters,
      limit: 3,
    };
    getList(newParams, pushArray);
  }

  handleEndReached = () => {
    const { pagination } = this.props;
    if (pagination) {
      if (pagination.next_page) {
        this.handleGetList({ page: pagination.next_page }, true)
      }
    }
  }

  showDetails = (url) => Linking.openURL(url);

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
          onPressSearchDone={this.handleGetList}
          onPressFilter={this.toggleModal}
          title={I18n.t('testsites')}
        />
        <Paragraph style={{ padding: 50, textAlign: 'center', fontSize: 22 }}>
          {I18n.t('testsites_description')}
        </Paragraph>
        {(_.isEmpty(list)) ?
          <NoData
            isFetching={refreshing}
            message={error}
            onRefresh={this.handleGetList}
          /> :
          <FlatList
            refreshing={refreshing}
            onRefresh={this.handleGetList}
            onEndReached={this.handleEndReached}
            onEndReachedThreshold={0.1}
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderListItem}
          />
        }
      </Continer>
    )
  }
}

