import React from "react";
import { View, StyleSheet, TextInput, Input, Image, TouchableOpacity, Text} from "react-native";
import { Container, Header, Title, Left, Right, Button, Body, Content} from "native-base";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from "react-native-vector-icons/FontAwesome";

import ListData from '../Components/listData';

export default class HomeScreen extends React.Component {

  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFFFFF'}}>
          <Left style={{flex:1}}>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Image
                style={{height: 40, width: 40, borderRadius: 30 }}
                source={
                  require('../Assets/images/images.jpg')
                }
              />
            </Button>
          </Left>
          <Body>
            <Title style={{alignSelf:'center', color:'#000000'}}>NOTE APP</Title>
          </Body>
          <Right>
            <View style={{right:10}}>
              <Menu
                ref={this.setMenuRef}
                button={<Icon onPress={this.showMenu} name="sort-amount-asc" style={{ fontSize:20, color: "#000000" }}/>}>
                <MenuItem onPress={this.hideMenu}>ASCENDING</MenuItem>
                <MenuItem onPress={this.hideMenu}>DESCENDING</MenuItem>
              </Menu>
            </View>
          </Right>
        </Header>
        <View style={{padding: 10}}>
            <TextInput style={styles.textInput}
              placeholder="Search Here!"
            />
        </View>
        <Content padder>
          <View>
            <ListData navigation={this.props.navigation}/>
          </View>
        </Content>
        <TouchableOpacity style={styles.fab} onPress={() => this.props.navigation.navigate('AddNote')}>
          <Icon name="plus"  size={21} color="#000" />
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 23,
    margin: 5,
    marginTop: 10,
    padding: 10,
    paddingLeft: 20,
    elevation: 2,
  },
  fab: {
    elevation: 3,
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:60,
    position: 'absolute',                                          
    bottom: 35,                                                    
    right: 15,
    backgroundColor:'#FFF',
    borderRadius:100,
  },
});