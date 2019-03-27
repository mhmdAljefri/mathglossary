import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { COLORS, getFullWidth } from '../../helpers/ui';
import SearchBar from '../Searchbar';
import MyIcon from './MyIcon';

const BACK_BUTTON_WIDTH = 60;

export default  class Search extends React.Component {
  static propsTypes = {
    onPress: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    isVisible: false,
  }

  animationView = null

  componentDidUpdate = ({ isOpen }) => {
    if (!isOpen && this.props.isOpen) {
      return this.setState({ isVisible: true })
    }
    if (!this.props.isOpen && this.animationView) {
        this.animationView.fadeOutRight(200).then(() =>
        this.setState({ isVisible: false })
      );
    }
  }
  

  render() {
    const {
      onPress,
      onSubmit,
    } = this.props;
    return (
      this.state.isVisible ? (
        <Animatable.View
          animation="fadeInRight"
          duration={400}
          ref={node => this.animationView = node}
          style={{ ...styles.header, backgroundColor: COLORS.primary }}
        >
          <TouchableWithoutFeedback style={{ width: BACK_BUTTON_WIDTH }}>
            <MyIcon color="#fff" name="x" style={styles.icon} onPress={onPress} />
          </TouchableWithoutFeedback>
          <SearchBar autoFocus color="#fff" style={styles.searchBar} onSubmit={onSubmit} />
        </Animatable.View>
      ) : ( null )
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 56,
    display: 'flex',
    flex: 1,
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
