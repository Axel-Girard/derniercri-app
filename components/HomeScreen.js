import React, { Component } from "react";

import LoginScreen from './LoginScreen';
import PokedexScreen from './PokedexScreen';

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
      return (<PokedexScreen />);
    }
  }
}

export default HomeScreen