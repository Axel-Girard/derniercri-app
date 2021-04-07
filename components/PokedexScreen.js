import React, { Component, PureComponent } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';

class PokedexScreen extends Component {
  state = {
    isLoading: false, // if is true, show a spinner
    pokemons: [],
    offset: 0,
    limit: 20,
  }

  fetchPokemon(pokemon) {
    const onSuccess = ({data}) => {
      const pokemons = this.state.pokemons;
      const pokemon = {
        id: data.id,
        name: data.name,
        avatar: data.sprites.front_default,
        types: data.types,
      };
      let sortPokemont = pokemons.concat(pokemon)
      // sort data on id 
      // because we need to do a lot of fetch and don't know which ending first
      sortPokemont.sort((a, b) => a.id > b.id ? 1 : -1)
      this.setState({ pokemons: sortPokemont });
    };

    axios.get(pokemon.url)
      .then(onSuccess)
  }

  fetchPokemonList() {
    const offset =  this.state.offset;
    const limit =  this.state.limit;

    const onSuccess = ({data}) => {
      if (data.count < offset + limit) {
        this.setState({isLoading: false});
        return
      }
      const results = data.results;

      results.forEach((pokemon, i) => {
        this.fetchPokemon(pokemon);
        if (i >= results.length - 1) {
          // when we fetch the last pokemon we stop the spinner
          // their may be a better way to do it, though
          this.setState({isLoading: false});
        }
      })
    };

    const onFailure = error => {
      console.log(error && error.response);
      this.setState({isLoading: false});
    };

    // Show spinner when call is made
    this.setState({isLoading: true, offset: offset + limit});

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(onSuccess)
      .catch(onFailure);
  }

  componentDidMount() {
    this.fetchPokemonList()
  }

  render() {
    const pokemons = this.state.pokemons;
    return (
      <SafeAreaView style={styles.container} >
        <Spinner visible={this.state.isLoading} />
        { pokemons &&
          <FlatList
            data={pokemons}
            renderItem={({item}) => <PokemonListItem pokemon={item} />}
            keyExtractor={pokemon => `list-item-${pokemon.id}`}
            onEndReached={this.fetchPokemonList.bind(this)}
            onEndReachedThreshold={0.7}
          />
        }
      </SafeAreaView>
    );
  }
}

class PokemonListItem extends PureComponent {
  render() {
    const item = this.props.pokemon;
    return (
      <ListItem bottomDivider>
        <Avatar source={{uri: item.avatar}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.types.map(type => type.type.name).join(', ')}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PokedexScreen