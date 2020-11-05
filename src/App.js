import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Header from "./components/layout/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
