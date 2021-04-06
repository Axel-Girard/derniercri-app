import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import LoginScreen from './LoginScreen';

class HomeScreen extends Component {
  state = {
    isLogin: false,
  }

  setLogin = (isLogin) => this.setState({isLogin})

  render() {
    const isLogin = this.state.isLogin;

    if (!isLogin) {
      return (<LoginScreen setLogin={this.setLogin} />);
    }

    return (
      <SafeAreaView style={styles.container} >
        <Text>Welcome to this test application</Text>
      </SafeAreaView>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen