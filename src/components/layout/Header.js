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

const headerStyle = {};
const linkStyle = {};

export default Header;
