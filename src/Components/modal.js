import React, { Component } from 'react';
import { Modal, Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class ModalExample extends Component {

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.visible}>
          <View style={{ flex:1, backgroundColor: 'rgba(0, 0, 0, 0.20)', alignItems:'center', justifyContent:'center' }}>
            <View style={{ backgroundColor:'#fff', borderRadius:5, width:'70%', padding:20, elevation:3 }}>
              <View>
                <TextInput style={styles.textInput} placeholder='Category Name'/>
                <TextInput style={styles.textInput} placeholder='Image Url'/>
              </View>
              <View style={{ flexDirection:'row', marginTop:30, justifyContent:'flex-end' }}>
                <TouchableOpacity
                  style={styles.button} 
                  onPress={this.props.onClose}>
                  <Text style={styles.buttonLabel}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.props.onClose}>
                  <Text style={styles.buttonLabel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#2ED1A2',
    marginHorizontal: 20,
    marginTop: 5,
    fontSize: 16
  },
  button: {
    paddingHorizontal: 8
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  }
})

export default ModalExample;