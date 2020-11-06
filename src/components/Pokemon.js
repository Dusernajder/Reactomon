import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemonId: "",
      pokemonImg: "",
    };
  }

  componentDidMount() {
    const url = this.props.pokemon.url;
    axios.get(url).then((pokemon) =>
      this.setState({
        pokemonId: pokemon.data.id,
        pokemonImg: pokemon.data.sprites.front_default,
      })
    );
  }

  render() {
    return (
      <Link to={`/pokemon/${this.state.pokemonId}`}>
        <div style={cardStyle}>
          <div>
            <img src={this.state.pokemonImg} alt={this.props.name} />
          </div>
          <div>
            <p style={cardName}>{this.props.pokemon.name}</p>
          </div>
        </div>
      </Link>
    );
  }
}

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  borderRadius: "0px 0px 10px 10px",
  boxSizing: "border-box",
  display: "table",
  margin: "20px",
  padding: "10px",
  background: "#282c34",
};

const cardName = {
  fontSize: "15px",
  color: "rgb(248, 204, 70)",
};

export default Pokemon;
