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
      <div style={pokemonCard}>
        <div style={flexboxStyle}>
          <div>
            <img
              src={this.state.pokemon.img}
              alt={this.state.pokemon.name}
              style={imgStyle}
            />
          </div>
          <div style={mainInfo}>
            <p>{this.state.pokemon.name}</p>
          </div>
          <div style={detailsInfo}>
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

const pokemonCard = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  borderRadius: "0px 0px 10px 10px",
  background: "#282c34",
};

const flexboxStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

const imgStyle = {
  maxWidth: "200px",
  margin: "10px",
};

const mainInfo = {
  color: "rgb(248, 204, 70)",
  textAlign: "center",
  fontSize: "30px",
};

const detailsInfo = {
  textAlign: "left",
  color: "#282c34",
  background: "rgb(248, 204, 70)",
  margin: "5px",
  borderRadius: "5px",
  minWidth: "200px",
  textAlign: "center",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

export default PokemonDetail;
