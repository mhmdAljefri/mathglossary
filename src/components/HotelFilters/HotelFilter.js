import React from 'react';
import {
  Alert,
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';
import Button from '../atom/Button';
import NumbricInput from '../atom/NumbricInput';
import FiltersIcon from '../FiltersIcon';
import { COLORS, getFullWidth } from '../../helpers/ui';
import { I18n } from 'react-redux-i18n';

export default class HotelFilter extends React.Component {
  toggleState = (state) => {
    this.props.changeFilter(state);
  }

  handleClear = () => {
    this.props.resetFilter();
  }

  handleSubmit = () => {
    this.props.onSubmit(this.props.filters)
  }

  changeFirstPrice = price => {
    this.props.changePrice({ start_price: price })
  }

  changeLastPrice = price => {
    this.props.changePrice({ end_price: price })
  }

  render() {
    const {
      parking,
      resturant,
      pool,
      elevator,
      wifi,
      double_room,
      unit_type,
      start_price,
      end_price,
      star,
    } = this.props.filters;

    return (
      <View>
        <Text>{I18n.t('price')}</Text>
        <View style={{
            ...styles.flex_center,
            justifyContent: 'space-between',
            flexWrap: 'wrap',            
          }}
        >
          <NumbricInput
            placeholder={I18n.t('from')}
            onChangeText={this.changeFirstPrice}
          />
          <NumbricInput
            placeholder={I18n.t('to')}
            onChange={this.changeLastPrice}
          />
        </View>
        <Text>{I18n.t('services')}</Text>
        <View style={{
            ...styles.flex_center,
            marginTop: 10,
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <FiltersIcon
            name="cloud"
            text={I18n.t('parking')}
            onPress={() => this.toggleState('parking')}
            checked={parking}
          />
          <FiltersIcon
            name="book-open"
            text={I18n.t('resturant')}
            onPress={() => this.toggleState('resturant')}
            checked={resturant}
          />
          <FiltersIcon
            name="sidebar"
            text={I18n.t('elevator')}
            onPress={() => this.toggleState('elevator')}
            checked={elevator}
          />
          <FiltersIcon
            name="wifi"
            text={I18n.t('wifi')}
            onPress={() => this.toggleState('wifi')}
            checked={wifi}
          />
          <FiltersIcon
            name="droplet"
            text={I18n.t('pool')}
            onPress={() => this.toggleState('pool')}
            checked={pool}
          />
          <FiltersIcon
            name="users"
            text={I18n.t('double_room')}
            onPress={() => this.toggleState('double_room')}
            checked={double_room}
          />
        </View>
        <Button
          color="primary"
          text={I18n.t('submit')}
          onPress={this.handleSubmit}
          style={{
            ...styles.button,
            marginTop: 20,
          }}
        />
        <Button
          text={I18n.t('clear')}
          style={styles.button}
          onPress={this.handleClear}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  button: { width: '100%' },
  flex_center: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
})

