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
import Modal from '../Modal';
import { COLORS } from '../../helpers/ui';
import { I18n } from 'react-i18nify';

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
    const { name, job, email, mobile, delay } = this.props;
    return (
      <Animatable.View
        animation="fadeInUp"
        delay={delay}
        style={{ borderBottomWidth: 2, borderBottomColor: '#eee', padding: 10, }}
      >
        <TouchableWithoutFeedback onPress={this.toggleDetails}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, }}>
            <StyledInnerView>
              <Icon size={20} name="user" />
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginHorizontal: 10, }}>{name}</Text>
            </StyledInnerView>
            <StyledInnerView>
              <Text style={{ fontWeight: 'bold', marginHorizontal: 10, }}>{job}</Text>
              <Icon name="chevron-down" />
            </StyledInnerView>
          </View>
        </TouchableWithoutFeedback>
        {this.state.isOpen && (
          <Animatable.View animation="fadeIn">
            <Text>{email}</Text>
            <Text>{mobile}</Text>
          </Animatable.View>
        )}
      </Animatable.View>
    );
  }
}

export default class Main extends Component {
  expertTeacher = id => ({
    id,
    name: `Ali-${id}`,
    job: 'Algarbr tacher',
    email: 'ali@math.app',
    mobile: '737048111',
  })
  defaultParams = {
    refreshing: false,
  };
  state = {
    list: [],
    isOpen: false,
    ...this.defaultParams,
  }

  getList = () => {
    // TODO: FETCHING EXPERT TEACHERS FROM API
  }
  handleEndReached = () => {
    // TODO: FETCHING EXPERT TEACHER FROM getList WITH PAGINATION
  }
  toggleModal = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const { refreshing, list } = this.state;
    return (
      <React.Fragment>
        <Modal
          title={I18n.t('expert_teachers')}
          isOpen={this.state.isOpen}
          onClose={this.toggleModal}
        >
          <FlatList
            refreshing={refreshing}
            onRefresh={this.getList}
            onEndReached={this.handleEndReached}
            onEndReachedThreshold={0.1}
            data={[...Array(10)].map((data, index) => this.expertTeacher(index))}
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
            easing="ease-out"
            iterationCount="infinite"
            duration={600}
          >
            <Icon color={COLORS.primary} name="users" size={24} />
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
})
