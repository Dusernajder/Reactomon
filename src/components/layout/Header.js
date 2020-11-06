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
              <button style={buttonStyle}>Pokemons</button>
            </Link>
          </div>
          <div style={linkStyle}>
            <Link to="/type">
              <button style={buttonStyle}>Type</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const headerStyle = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  background: "#333",
  backgroundColor: "#282c34",
  textAlign: "center",
  color: "rgb(248, 204, 70)",
  padding: "10px",
  borderRadius: "5px",
  margin: "0px 0px 20px 0px",
};

const flexboxStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

const linkStyle = {
  color: "rgb(248, 204, 70)",
};

const buttonStyle = {
  fontSize: "16px",
  backgroundColor: "rgb(248, 204, 70)",
  border: "none",
  display: "inline-block",
  color: "#282c34",
  borderRadius: "5px",
};

export default Header;
