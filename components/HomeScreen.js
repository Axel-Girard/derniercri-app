import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import PokedexScreen from './PokedexScreen';
import LoginScreen from './LoginScreen';
import CustomDrawerContent from './CustomDrawerContent';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

class HomeScreen extends Component {
  state = {
    isLogin: false,
  }

  setLogin = (isLogin) => this.setState({isLogin})

  render() {
    const isLogin = this.state.isLogin;

    if (!isLogin) {
      return (<LoginScreen setLogin={this.setLogin} />);
    } else {
      return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Pokedex" component={PokedexScreen} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      );
    }
  }
}

export default HomeScreen