import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import Header from "./components/layout/Header";
import PokemonList from "./components/layout/PokemonList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => this.setState({ pokemons: response.data.results }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/pokemons">
            <div style={pokemonContainer}>
              <PokemonList pokemons={this.state.pokemons} />
            </div>
          </Route>
        </div>
      </Router>
    );
  }
}

const pokemonContainer = {
  display: "flex",
  flexWrap: "wrap",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  padding: "20px",
  borderRadius: "5px",
};

export default App;
