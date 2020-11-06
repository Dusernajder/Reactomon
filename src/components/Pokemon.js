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
      <div style={cardStyle}>
        <div>
          <img src={this.state.pokemonImg} />
        </div>
        <div content="width=device-width">
          <p style={cardName}>{this.props.pokemon.name}</p>
        </div>
      </div>
    );
  }
}

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  borderRadius: "10px",
  boxSizing: "border-box",
  display: "table",
  margin: "20px",
  padding: "10px",
  background: "#282c34",
};

const cardName = {
  fontSize: "15px",
  color: "rgb(248, 204, 70)",
  fontSize: "20px",
};

export default Pokemon;
