import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <Link to={"/"}>
          <img src={logo} alt="Pokemon Logo" style={logoStyle} />
        </Link>
        <div style={flexboxStyle}>
          <div style={linkStyle}>
            <Link to="/pokemons">
              <button style={buttonStyle}>Pokemons</button>
            </Link>
          </div>
          <div style={linkStyle}>
            <Link to="/types">
              <button style={buttonStyle}>Types</button>
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
  borderRadius: "10px 10px 0px 0px",
  margin: "0px 0px 20px 0px",
};

const logoStyle = {
  maxHeight: "150px",
  minWidth: "20px",
};

const flexboxStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const linkStyle = {
  color: "rgb(248, 204, 70)",
};

const buttonStyle = {
  fontSize: "26px",
  backgroundColor: "rgb(248, 204, 70)",
  border: "none",
  display: "inline-block",
  color: "#282c34",
  borderRadius: "5px",
  margin: "10px",
};

export default Header;
