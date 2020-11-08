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

export default TypeList;
