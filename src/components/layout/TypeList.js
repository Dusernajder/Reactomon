import React, { Component } from "react";
import axios from "axios";

class TypeList extends Component {
  constructor() {
    super();
    this.state = {
      types: [],
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/type").then((types) => {
      this.setState({ types: types.data.results });
    });
  }

  render() {
    console.log(this.state.types);
    return (
      <div style={flexboxStyle}>
        {this.state.types.map((type) => (
          <div style={typeStyle}>
            <p>{type.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

const typeStyle = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  borderRadius: "0px 0px 10px 10px",
  boxSizing: "border-box",
  display: "table",
  margin: "15px",
  padding: "10px",
  background: "#282c34",
  fontSize: "26px",
  color: "rgb(248, 204, 70)",
};

const flexboxStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  padding: "20px",
  borderRadius: "0px 0px 10px 10px",
};

export default TypeList;
