import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Container, Content, Text, List, Left, Body, ListItem } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "../Components/modal";
import CategoriesData from '../Data/categories';

export default class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: CategoriesData,
      modalVisible: false,
    }
  }

  setModalVisible() {
    this.setState(state => ({ modalVisible: !state.modalVisible }));
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{ justifyContent:'center', alignItems:'center', padding:20, paddingTop:35 }}>
            <Image
              style={{ height: 140, width: 140, borderRadius: 80 }}
              source={ require('../Assets/images/images.jpg') }
            />
            <Text style={{ paddingVertical:20, fontSize:20 }}>Maximilian Rodel</Text>
          </View>
          <List>
            {
              this.state.categories.map((data, index) => {
                return (
                  <ListItem
                    key={index}
                    icon
                    noBorder
                    onPress={() => this.props.navigation.navigate(data.category)}>
                    <Left>
                      <Icon
                        name={data.icon}
                        style={styles.icon}
                      />
                    </Left>
                    <Body>
                      <Text style={styles.label}>{data.category}</Text>
                    </Body>
                  </ListItem>
                );
              })
            }
            <ListItem 
              icon 
              noBorder
              onPress={() => this.setModalVisible()}>
              <Left>
                <Icon
                  name='plus-circle'
                  style={styles.icon}
                />
              </Left> 
              <Body>
                <Text style={styles.label}>Add Category</Text>
              </Body>
              <Modal visible={this.state.modalVisible} onClose={() => this.setModalVisible()} />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: "#000",
    fontSize: 27
  },
  label: {
    fontSize: 18
  }
})