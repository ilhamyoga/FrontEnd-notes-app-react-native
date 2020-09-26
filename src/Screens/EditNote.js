import React, { Component } from 'react';
import { View, TextInput, Picker } from 'react-native';
import { Container, Header, Title, Left, Right, Button, Body, Content, Text } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import ItemsCategory from '../Data/categories';

export default class EditNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      description: ''
    }
  }

  updateCategory = (value) => {
    this.setState({ category: value })
  }

  items = () => {
    let item  = []
    for(let i = 0; i<ItemsCategory.length; i++){
      item.push(
        <Picker.item key={i} label={ItemsCategory[i].category} value={ItemsCategory[i]} />
      )
    }
    return item
  }

  render() {
    console.log(this.state.category)
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
            <TextInput 
              multiline={true}
              style={{fontSize:20}}
              placeholder='EDIT TITLE ...'
              onChangeText={text => this.setState({ title: text })}>
              {this.props.navigation.state.params.title}
            </TextInput>
          </View>
          <View style={{margin:27, height:250}}>
            <TextInput 
              multiline={true}
              style={{fontSize:20}}
              placeholder='EDIT DESCRIPTION ...'
              onChangeText={text => this.setState({ description: text })}
            >
              {this.props.navigation.state.params.note}
            </TextInput>
          </View>
          <View style={{margin:30, maxWidth:200, marginTop:30, marginBottom:0}} >
            <Text style={{fontSize:18, fontWeight: 'bold'}}>CATEGORY</Text>
          </View>
          <View style={{margin:30, maxWidth:200, marginTop:5}} >
            <Picker
              style={{ elevation:2 }}
              selectedValue={this.state.category}
              onValueChange = {this.updateCategory}
            >
              {this.items()}
            </Picker>
          </View>
        </Content>
      </Container>
    ); 
  }
}