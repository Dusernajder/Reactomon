import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        Pokemon
        <div style={linkStyle}>
          <Link to="/pokemon">Pokemons</Link>
          <div style={linkStyle}>
            <Link to="/type">Types</Link>
          </div>
        </div>
      </div>
    );
  }
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: "5px",
};

export default Header;
