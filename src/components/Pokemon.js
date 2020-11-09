import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pokemon = (props) => {
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");

  const fetchPokemon = () => {
    const url = props.pokemon.url;
    axios.get(url).then((pokemon) => {
      setPokemonId(pokemon.data.id);
      setPokemonImg(pokemon.data.sprites.other.dream_world.front_default);
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <Link to={`/pokemon/${pokemonId}`}>
      <div
        style={cardStyle}
        onClick={props.detailPokemon}
        className="pokemonCard"
      >
        <div>
          <img src={pokemonImg} alt={props.pokemon.name} style={imgStyle} />
        </div>
        <div>
          <p style={cardName}>{props.pokemon.name}</p>
        </div>
      </div>
    </Link>
  );
};

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  borderRadius: "0px 0px 10px 10px",
  boxSizing: "border-box",
  display: "table",
  margin: "15px",
  padding: "10px",
  background: "#282c34",
};

const imgStyle = {
  maxWidth: "120px",
  maxHeight: "120px",
  minHeight: "120px",
};

const cardName = {
  fontSize: "26px",
  color: "rgb(248, 204, 70)",
};

export default Pokemon;
