import React, { Component } from 'react';
import { StatusBar, View, TextInput, Picker } from 'react-native';
import { Container, Header, Title, Left, Right, Button, Body, Content, Text } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import ItemsCategory from '../Data/itemsCategory';

export default class EditNote extends Component {

  state = { category: ''}
  updateCategory = (value: string) => {
    this.setState({ category: value })
  }

  items = () => {
    let item  = []
    for(let i = 0; i<ItemsCategory.length; i++){
      item.push(
        <Picker.item key={i} label={ItemsCategory[i].category} value={ItemsCategory[i].category} />
      )
    }
    return item
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFFFFF'}}>
          <Left style={{flex:1}}>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrowleft" style={{ fontSize:20, color: "#000000" }}/>
            </Button>
          </Left>
          <Body>
            <Title style={{alignSelf:'center', color:'#000000'}}>EDIT NOTE</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="checkcircleo" style={{ fontSize:20 }}/>
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{margin:27, height:50, top:40, borderBottomWidth:1}}>
            <TextInput multiline={true} style={{fontSize:20}} placeholder='EDIT TITLE ...'>
              {this.props.navigation.state.params.title}
            </TextInput>
          </View>
          <View style={{margin:27, height:250}}>
            <TextInput multiline={true} style={{fontSize:20}} placeholder='EDIT DESCRIPTION ...'>
              {this.props.navigation.state.params.note}
            </TextInput>
          </View>
          <View style={{margin:30, maxWidth:200, marginTop:30, marginBottom:0}} >
            <Text style={{fontSize:18, fontWeight: 'bold'}}>CATEGORY</Text>
          </View>
          <View style={{margin:30, maxWidth:200, marginTop:5}} >
            <Picker
              style={{elevation:2}}
              selectedValue={this.state.category}
              onValueChange = {this.updateCategory.bind(this)}
            >
              <Picker.Item label={this.props.navigation.state.params.category} value={this.props.navigation.state.params.category} />
              {this.items()}
            </Picker>
          </View>
        </Content>
      </Container>
    ); 
  }
}