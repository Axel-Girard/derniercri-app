import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';

class LoginScreen extends Component {
  state = {
    login: 'dernier', // normally it's empty but to test it's helpful
    password: 'cri', // normally it's empty but to test it's helpful
    isLoading: false, // if is true, show a spinner
    error: '', // in case of the login fail, we want to tell it to the user
  }

  onPressLogin() {
    const { login, password } = this.state;
    const credential = { login, password };

    const onSuccess = () => {
      this.setState({
        isLoading: false,
        error: '',
      });
      this.props.setLogin(true)
    };

    const onFailure = error => {
      this.setState({
        error: error?.response?.data,
        isLoading: false,
      });
    };

    // Show spinner when call is made
    this.setState({isLoading: true});

    axios.post('https://dernier-cri.herokuapp.com/', credential)
      .then(onSuccess)
      .catch(onFailure);
  }

  render() {
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to this test application</Text>
          <Image source={require('../assets/logo.png')} />
        </View>
        <View style={styles.main}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                onChangeText={(login) => this.setState({login})}
                placeholder="Login"
                placeholderTextColor="#003f5c"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
              />
            </View>

            { this.state.error ? <Text style={styles.errorText}>{this.state.error}</Text>: null }
            <Text>Credentials: dernier/cri</Text>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={this.onPressLogin.bind(this)}>
              <Text style={styles.loginText} >LOGIN</Text>
            </TouchableOpacity>
            <Spinner visible={this.state.isLoading} />
        </View>
      </SafeAreaView>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.4,
    justifyContent:"center",
    alignItems: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
  },
  inputView: {
    backgroundColor: "#A4A4F7",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  loginBtn: {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#000075",
  },
  loginText: {
    color: 'white'
  },
  errorText: {
    color: 'red',
  },
  title: {
    fontSize: 22,
  }
});

export default LoginScreen