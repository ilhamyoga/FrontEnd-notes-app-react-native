import React,{Component} from "react";
import { Image, View } from "react-native";
import { Container, Content, Text, List, Left, ListItem, TouchableHighlight } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "../Components/modalShow";

const routes = [
  {
    name:"Personal",
    icon:"user-circle",
  },
  {
    name:"Work",
    icon:"briefcase",
  },
  {
    name:"Wishlist",
    icon:"list-alt",
  }
];

export default class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data:routes
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{justifyContent:'center', alignItems:'center',margin:35}}>
            <Image
              style={{ marginTop:20, height: 130, width: 130, borderRadius: 80 }}
              source={
                require('../Assets/images/images.jpg')
              }
            />
            <Text style={{marginTop:20, marginBottom:20, fontSize:20}}>Maximilian Rodel</Text>
          </View>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  noBorder
                  onPress={() => this.props.navigation.navigate(data.name)}>
                  <Left>
                    <Icon
                      name={data.icon}
                      style={{ color: "#000", fontSize: 28, width: 38 }}
                    />
                    <Text style={{ fontSize: 18 }}>{data.name}</Text>
                  </Left>
                </ListItem>
              );
            }}
          />
          <List>
            <ListItem noBorder>
              <Left>
                <Icon
                  name='plus-circle'
                  style={{ color: "#000", fontSize: 28, width: 38 }}
                />
                <Modal />
              </Left> 
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}