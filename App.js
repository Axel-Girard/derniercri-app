import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import LoginScreen from './components/LoginScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "#fafbfb",
  },
})
