import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import { HashRouter, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

const { app } = window.require("electron").remote;

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <NavBar />
        <HashRouter>
          <Route path="/" exact component={Dashboard} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
