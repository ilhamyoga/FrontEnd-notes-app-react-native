import React,{Component} from 'react';
import { StatusBar, ScrollView, View, StyleSheet, TextInput, Input } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content} from "native-base";

class header extends Component{
    render(){
        return(
            <Header style={{ backgroundColor: '#FFFFFF'}}>
	          <Left style={{flex:1}}>
	            <Button 
	              transparent
	              onPress={() => this.props.navigation.openDrawer()}>
	              <Icon name="menu" style={{ color: "#000000" }}/>
	            </Button>
	          </Left>
	          <Body>
	            <Title style={{alignSelf:'center', color:'#000000'}}>NOTE APP</Title>
	          </Body>
	          <Right>
	            <Button
	              transparent
	              onPress={() => this.props.navigation.openDrawer()}>
	              <Icon name="shuffle" style={{ color: "#000000" }}/>
	            </Button>
	          </Right>
	        </Header>
        )
    }
}

export default header;