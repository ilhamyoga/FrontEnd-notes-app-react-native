import React from "react";
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Container, Header, Title, Left, Right, Button, Body, Content} from "native-base";
import Menu, { MenuItem } from 'react-native-material-menu';
import Icon from "react-native-vector-icons/FontAwesome";

import ListData from '../Components/listData';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sort: 'desc'
    }
  }

  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = (value) => {
    this.setState({ sort: value })
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };

  search = (value) => {
    this.setState({ search: value })
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFFFFF' }}>
          <Left style={{ flex:1 }}>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Image
                style={{ height: 40, width: 40, borderRadius: 30 }}
                source={require('../Assets/images/images.jpg')}
              />
            </Button>
          </Left>
          <Body>
            <Title style={{ alignSelf:'center', color:'#000000' }}>NOTE APP</Title>
          </Body>
          <Right>
            <View style={{ right:8 }}>
              <Menu
                ref={this.setMenuRef}
                button={
                  <Icon 
                    onPress={this.showMenu}
                    name="sort-amount-asc"
                    style={{ fontSize:20, color: "#000000" }}
                  />
                }>
                <MenuItem onPress={() => this.hideMenu('asc')}>ASCENDING</MenuItem>
                <MenuItem onPress={() => this.hideMenu('desc')}>DESCENDING</MenuItem>
              </Menu>
            </View>
          </Right>
        </Header>
        <View style={{ padding: 20 }}>
          <View style={styles.search}>
            <TextInput 
              style={styles.textInput}
              placeholder="Search Here!"
              onChangeText={text => this.search(text)}
            />
          </View>
        </View>
        <Content padder>
          <View>
            <ListData {...this.props} search={this.state.search} sort={this.state.sort} />
          </View>
        </Content>
        <TouchableOpacity style={styles.fab} onPress={() => this.props.navigation.navigate('AddNote')}>
          <Icon name="plus" size={22} color="#000" />
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    elevation: 3,
    borderRadius: 23
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 23,
    padding: 10,
    paddingLeft: 20,
    fontSize: 15
  },
  fab: {
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingHorizontal: 22,
    position: 'absolute',
    bottom: 35,
    right: 15,
    backgroundColor: '#FFF',
    borderRadius: 50
  }
});