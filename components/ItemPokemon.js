import React, { PureComponent } from "react";
import {
  TouchableHighlight,
} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'

class PokemonListItem extends PureComponent {
  render() {
    const item = this.props.pokemon;
    return (
      <TouchableHighlight 
        onPress={() => { this.props.navigation.navigate("Details", {pokemon: item}) }}>
        <ListItem bottomDivider>
          <Avatar source={{uri: item.sprites.front_default}} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.types.map(type => type.type.name).join(', ')}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableHighlight>
    )
  }
}

export default PokemonListItem;