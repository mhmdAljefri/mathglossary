import React from 'react';
import { Modal, Text, Alert, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../helpers/ui';

export default class GreatModal extends React.Component {
  handlePress = (event) => {
    if (event === this.ref) {
      // console.log('event')
    } else {
      // console.log('yes')
    }
  }

  render() {
    const { onClose, isOpen, children, title } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={isOpen}
        onRequestClose={onClose}
      >
        <View onPress={this.handlePress} style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0, .2)', borderRadius: 5 }}>
          <View style={styles.modal_view}>
            <View
              ref={node => { this.ref = node }}
              style={styles.header}
            >
              <Text style={{ fontWeight: '600', color: COLORS.primary }}>{title}</Text>
              <Icon
                name="x"
                onPress={onClose}
                size={20}
              />
            </View>
            {children}
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modal_view: {
    padding: 20,
    elevation: 5,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 70,
  },
  header: {
    display: 'flex',
    height: 20,
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
})
