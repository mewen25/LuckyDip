import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

const { app } = window.require("electron").remote;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
      </div>
    );
  }
}

export default App;
