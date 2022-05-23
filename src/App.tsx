import React, { Component } from "react";

import "./App.css";
import Header from "./components/header/Header";
import MovieList from "./pages/movies/MovieList";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
