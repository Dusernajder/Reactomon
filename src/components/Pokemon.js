import React, { Component } from "react";
import axios from "axios";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemonImg: {},
    };
  }

  componentDidMount() {
    const url = this.props.pokemon.url;
    axios
      .get(url)
      .then((pokemonData) =>
        this.setState({ pokemonImg: pokemonData.data.sprites.front_default })
      );
  }

  render() {
    console.log(this.state.pokemonImg);
    return (
      <div>
        <div>
          <img src={this.state.pokemonImg} />
        </div>
        <div content="width=device-width">
          <p>{this.props.pokemon.name}</p>
        </div>
      </div>
    );
  }
}

export default Pokemon;
