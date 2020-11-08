import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/layout/PokemonList";
import PokemonDetail from "./components/layout/PokemonDetail";
import TypeList from "./components/layout/TypeList";
import Navbar from "./components/layout/Navbar";
import "./App.css";

const App = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({});

  const fetchPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=40").then((response) => {
      setPokemons(response.data.results);
    });
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/(pokemons|)">
          <div style={pokemonContainer}>
            <PokemonList
              pokemons={pokemons}
              detailPokemon={(pokemon) => setPokemon(pokemon)}
            />
          </div>
        </Route>
        <Route path="/pokemon/:id">
          <PokemonDetail pokemon={pokemon} />
        </Route>
        <Route path="/types">
          <TypeList />
        </Route>
      </div>
    </Router>
  );
};

const pokemonContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  padding: "20px",
  borderRadius: "0px 0px 10px 10px",
};

export default App;
