import React, { Component } from 'react';
import { View, TextInput, Picker } from 'react-native';
import { Container, Header, Title, Left, Right, Button, Body, Content, Text } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import CategoriesData from '../Data/categories';
import ItemsData from '../Data/items';

console.disableYellowBox=true;

export default class AddNote extends Component {  

    constructor() {
      super();
      this.state = {
        category: '',
        title: '',
        description: ''
      }
    }

    updateCategory = (value) => {
      this.setState({ category: value })
    }

    onAdd = () => {
      const data = {
        id: ItemsData.length + 2,
        time: new Date(),
        title: this.state.title,
        category_id: this.state.category.id,
        category: this.state.category.category,
        note: this.state.description
      }
      ItemsData.push(data)

      this.props.navigation.goBack()
    }

    items = () => {
      let item  = []
      for(let i = 0; i<CategoriesData.length; i++){
        item.push(
          <Picker.item key={i} label={CategoriesData[i].category} value={CategoriesData[i]} />
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
              <Title style={{alignSelf:'center', color:'#000000'}}>ADD NOTE</Title>
            </Body>
            <Right>
              <Button
                transparent
                onPress={this.onAdd}>
                <Icon name="checkcircleo" style={{ fontSize:20 }}/>
              </Button>
            </Right>
          </Header>
          <Content>
            <View style={{margin:27, height:50, top:40, borderBottomWidth:1}}>
              <TextInput
                placeholder="ADD TITLE ..."
                multiline={true}
                style={{fontSize:20}}
                onChangeText={text => this.setState({ title: text })}
              />
            </View>
            <View style={{margin:27, height:250}}>
              <TextInput 
                placeholder="ADD DESCRIPTION ..."
                multiline={true}
                style={{fontSize:20}}
                onChangeText={text => this.setState({ description: text })}
              />
            </View>
            <View style={{margin:30, maxWidth:'45%', marginTop:30, marginBottom:0}} >
              <Text style={{fontSize:18, fontWeight: 'bold'}}>CATEGORY</Text>
            </View>
            <View style={{margin:30, maxWidth:'45%', marginTop:5}} >
              <Picker
                style={{ elevation:2 }}
                selectedValue={this.state.category}
                onValueChange = {this.updateCategory}
              >
                <Picker.Item label="ADD NEW CATEGORY" value="" />
                {this.items()}
              </Picker>
            </View>
          </Content>
        </Container>
      ); 
    }
}