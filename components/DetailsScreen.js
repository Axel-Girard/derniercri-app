import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import { ListItem, Avatar } from 'react-native-elements';

const DetailsScreen = ({ navigation, route }) => {
  const pokemon = route.params.pokemon;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerView}>
          <Text style={styles.title}>{pokemon.name} #{pokemon.id}</Text>

          <View style={styles.types}>
            {
              pokemon.types.map((type) => {
                return(<Text key={type.type.name} style={styles.typeText}>{type.type.name}</Text>)
              })
            }
          </View>
        </View>
        <View style={styles.avatarView}>
          <Avatar
            style={styles.logo}
            source={{
              uri: pokemon.sprites.front_default,
            }}
          />
        </View>
      </View>
      <View style={styles.stats}>
        <FlatList
          data={pokemon.stats}
          renderItem={({item}) => <Item stat={item} />}
          keyExtractor={item => {item.stat.name}}
          ListHeaderComponent={() => <Header />}
        />
      </View>
    </View>
  );
};

const Header = () => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <ListItem.Title style={styles.headerList}>Base stats</ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

const Item = ({ stat }) => (
  <ListItem bottomDivider>
    <ListItem.Content style={styles.ListItem}>
      <ListItem.Subtitle style={styles.Subtitle}>{stat.stat.name}</ListItem.Subtitle>
      <ListItem.Title style={styles.Title}>{stat.base_stat}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.4,
    flexDirection: "row",
  },
  headerView: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  },
  title: {
    flex: 0.5,
    fontSize: 22,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  avatarView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logo: {
    width: 200,
    height: 200,
    position: 'relative',
    right: 0,
  },
  types: {
    flexDirection: "row",
  },
  typeText: {
    borderRadius:25,
    alignSelf: 'flex-start',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#d9dbe0',
    color: 'black',
  },
  stats: {
    flex: 0.6,
  },
  headerList: {
    fontWeight: "bold",
  },
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

export default DetailsScreen