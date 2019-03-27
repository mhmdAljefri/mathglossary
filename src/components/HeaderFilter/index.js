import React, { Component } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import { getFullWidth } from "../../helpers/ui";
import logo from '../../assets/img/diar_30px.jpg';
import { COLORS } from '../../helpers/ui';
import Search from './Search';
import MyIcon from './MyIcon';
import { withNavigation } from 'react-navigation';

const BACK_BUTTON_WIDTH = 60;

class SearchFilter extends Component {
  state = {isSearch: false}
  componentDidMount() {
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidHideListener.remove();
  }

  keyboardDidHide = () => {
    if (this.state.isSearch) this.setState({ isSearch: false });
  }

  navigator = () => {
    this.props.navigation.navigate('Location');
  }
  toggleSearch = () => this.setState({ isSearch: !this.state.isSearch })
  render() {
    const { onPressSearchDone, title } = this.props
    const { isSearch } = this.state;
    return (
      <View style={styles.header}>
          <Search
            isOpen={isSearch}
            onSubmit={onPressSearchDone}
            onPress={this.toggleSearch}
          />
        {isSearch || (<React.Fragment>
            <View style={styles.title}>
              <Image source={logo}/>
              <Text style={{ lineHeight: 60 }}>{title}</Text>
            </View>
            <View style={styles.icons}>
              <MyIcon color={COLORS.primary} {...this.props} onPress={this.toggleSearch} style={styles.icon} name="search" />
              <MyIcon color={COLORS.primary} {...this.props} onPress={this.navigator} style={styles.icon} name="map-pin" />
            </View>
          </React.Fragment>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',    
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 4,
    backgroundColor: '#fff'
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    height: 60,
    width: getFullWidth() - BACK_BUTTON_WIDTH,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: { display: 'flex', padding: 15 }
});

export default withNavigation(SearchFilter);