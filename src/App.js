import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import Header from "./components/layout/Header";
import PokemonList from "./components/layout/PokemonList";
import PokemonDetail from "./components/layout/PokemonDetail";
import "./App.css";
import TypeList from "./components/layout/TypeList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemon: "",
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=40").then((response) =>
      this.setState({
        pokemons: response.data.results,
      })
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/(pokemons|)">
            <div style={pokemonContainer}>
              <PokemonList
                pokemons={this.state.pokemons}
                detailPokemon={(pokemon) => this.setState({ pokemon: pokemon })}
              />
            </div>
          </Route>
          <Route path="/pokemon/:id">
            <PokemonDetail pokemon={this.state.pokemon} />
          </Route>
          <Route path="/types">
            <TypeList />
          </Route>
        </div>
      </Router>
    );
  }
}

const pokemonContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  padding: "20px",
  borderRadius: "0px 0px 10px 10px",
};

export default App;
