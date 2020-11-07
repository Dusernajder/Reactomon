import React, { Component } from "react";
import axios from "axios";

class PokemonDetail extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
    };
  }

  componentDidMount() {
    const url = this.props.pokemon.url;
    axios.get(url).then((pokemon) =>
      this.setState({
        pokemon: {
          ...pokemon.data,
          img: pokemon.data.sprites.other.dream_world.front_default,
        },
      })
    );
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.pokemon.img} alt={this.state.pokemon.name} />
          </div>
          <div>
            <p>{this.state.pokemon.name}</p>
          </div>
          <div>
            <div>
              <p>Height: {this.state.pokemon.height}</p>
              <p>Weight: {this.state.pokemon.weight}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
