import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from 'react-native-elements';

const Item = ({ stat }) => (
  <ListItem bottomDivider>
    <ListItem.Content style={styles.ListItem}>
      <ListItem.Subtitle style={styles.Subtitle}>{stat.stat.name}</ListItem.Subtitle>
      <ListItem.Title style={styles.Title}>{stat.base_stat}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
);

const styles = StyleSheet.create({
  ListItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
  },
  Subtitle: {
    flex: 0.5,
  },
  Title: {
    flex: 1,
  },
});

export default Item;