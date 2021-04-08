import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import { Avatar } from 'react-native-elements';

const avatar = require('../assets/avatar.jpg')

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Avatar rounded size="xlarge" source={avatar} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Misty</Text>
        <Text>Gym leader of Cerulean</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 22,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  avatarView: {
    flex: 0.5,
    justifyContent:"center",
    alignItems: "center",
  },
});

export default Profile;