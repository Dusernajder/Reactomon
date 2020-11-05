import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        Pokemon
        <div style={flexboxStyle}>
          <div style={linkStyle}>
            <Link to="/pokemons">
              <button>Pokemons</button>
            </Link>
          </div>
          <div style={linkStyle}>
            <Link to="/type">
              <button>Type</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const headerStyle = {
  background: "#333",
  backgroundColor: "#282c34",
  textAlign: "center",
  color: "rgb(248, 204, 70)",
  padding: "10px",
  borderRadius: "5px",
};

const flexboxStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

const linkStyle = {
  color: "rgb(248, 204, 70)",
};

export default Header;
