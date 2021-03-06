import { Component } from "react";
import Pokemon from "../Pokemon";

class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <Pokemon
        key={pokemon.name}
        pokemon={pokemon}
        detailPokemon={this.props.detailPokemon.bind(this, pokemon)}
      />
    ));
  }
}

export default PokemonList;
