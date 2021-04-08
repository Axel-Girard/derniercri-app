import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from 'react-native-elements';

const Header = () => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <ListItem.Title style={styles.headerList}>Base stats</ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

const styles = StyleSheet.create({
  headerList: {
    fontWeight: "bold",
  },
});

export default Header;
