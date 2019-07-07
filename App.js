
import React, { Component } from 'react';
import { View, Text } from "react-native";
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import Home from './src/Screens/Home';
import Note from './src/Screens/Note';
import AddNote from './src/Screens/AddNote';
import EditNote from './src/Screens/EditNote';
import SideBar from './src/Sidebar/Sidebar';

const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: Home },
    Personal : { screen: Note },
    AddNote: { screen: AddNote },
    EditNote: { screen: EditNote },
  },
  {
    contentComponent: props => <SideBar {...props} />
  },
);

const appContainer = createAppContainer(AppDrawerNavigator);
export default appContainer;