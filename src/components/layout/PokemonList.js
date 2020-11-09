import React from "react";
import Pokemon from "../Pokemon";

const PokemonList = (props) => {
  return props.pokemons.map((pokemon) => (
    <Pokemon
      key={pokemon.name}
      pokemon={pokemon}
      detailPokemon={props.detailPokemon.bind(this, pokemon)}
    />
  ));
};

export default PokemonList;
