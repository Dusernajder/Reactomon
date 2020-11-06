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
            <div>
              <PokemonList pokemons={this.state.pokemons} />
            </div>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
