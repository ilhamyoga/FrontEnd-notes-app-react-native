import React,{Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

class counter extends Component{
    constructor(){
        super();
        this.state = {
            counter:0,
        }
    }
    render(){
        return(
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text>Ini Counter</Text>
                <TouchableOpacity 
                    style={{backgroundColor:'green'}}
                    onPress={() => {
                    let count = this.state.counter;
                    this.setState({
                        counter: count + 1,
                    })
                }}>
                    <Text style = {{color:'white'}}>Ini {this.props.title}</Text>  
                    <Text>{this.state.counter}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default counter;