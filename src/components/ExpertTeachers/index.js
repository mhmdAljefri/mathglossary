import React, { Component } from 'react'
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
  View,
  Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';

import Modal from '../Modal';
import { COLORS } from '../../helpers/ui';
import { getList } from '../../redux/expertsTeachers/actionCreators';

const StyledInnerView = ({ children }) => (
  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
    {children}
  </View>
)

class TeacherItem extends React.Component {
  state = {
    isOpen: false,
  }
  toggleDetails = () => this.setState({ isOpen: !this.state.isOpen })
  render() {
    const { name, job, email, delay } = this.props;
    return (
      <Animatable.View
        animation="fadeInUp"
        delay={delay}
        style={{ borderBottomWidth: 2, borderBottomColor: '#eee', padding: 10, }}
      >
        <TouchableWithoutFeedback onPress={this.toggleDetails}>
          <View style={styles.betweenWrapper}>
            <StyledInnerView>
              <Icon size={20} name="user" />
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginHorizontal: 10, }}>{name}</Text>
            </StyledInnerView>
            <StyledInnerView>
              <Icon name="chevron-down" />
            </StyledInnerView>
          </View>
        </TouchableWithoutFeedback>
        {this.state.isOpen && (
          <Animatable.View animation="fadeIn">
            <View style={styles.betweenWrapper}>
              <Text>{I18n.t('job')}</Text>
              <Text style={{ fontWeight: 'bold', color: COLORS.primary }}>{job}</Text>
            </View>
            <View style={styles.betweenWrapper}>
              <Text>{I18n.t('email')}</Text>
              <Text>{email}</Text>
            </View>
          </Animatable.View>
        )}
      </Animatable.View>
    );
  }
}

const limit = 8;
class Main extends Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    this.handleGetList();
  }  

  handleGetList = (params, pushArray) => {
    this.props.getList({...params, limit}, pushArray).then(response => {
    }).catch(error => console.log({error}));
  }

  handleEndReached = () => {
    const { pagination } = this.props;
    console.log({pagination})
    if (pagination) {
      if (pagination.next_page) {
        this.handleGetList({ page: pagination.next_page }, true)
      }
    }
  }

  toggleModal = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const { fetching, list } = this.props;
    return (
      <React.Fragment>
        <Modal
          title={I18n.t('expert_teachers')}
          isOpen={this.state.isOpen}
          onClose={this.toggleModal}
        >
          <FlatList
            refreshing={fetching}
            onRefresh={this.handleGetList}
            onEndReached={this.handleEndReached}
            onEndReachedThreshold={0.1}
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TeacherItem
                {...item}
                delay={index * 200}
                onPress={() => this.showDetails(item)}
              />
            )}
          />
        </Modal>
        <TouchableHighlight
          onPress={this.toggleModal}
          style={styles.floating_action}
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in"
            iterationCount="infinite"
            duration={600}
          >
            <Icon color={COLORS.primary} name="users" size={18} />
          </Animatable.View>
        </TouchableHighlight>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  betweenWrapper: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, },
  floating_action: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    backgroundColor: '#fff',
    bottom: 60,
    right: 12.5,
    height: 45,
    width: 45,
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
});

const mapStateToProps = ({ teacher:
  {
    list,
    pagination,
    fetching
  },
}) => ({
  list,
  fetching,
  pagination,
});

const mapDispatchToProps = dispatch => ({
  getList: (params, pushArray) => dispatch(getList(params, pushArray)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

