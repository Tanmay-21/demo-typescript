import React, { Component } from "react";

import "./MovieList.css";
import Button from "../../components/buttons/Button";
import Modal from "../../components/modal/Modal";

type MovieListProps = {};

type MovieListState = {
  Movies: string[];
  NewMovie: string;
  showModal: boolean;
};

class MovieList extends Component<MovieListProps, MovieListState> {
  constructor(props: MovieListProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = { Movies: [], NewMovie: "", showModal: false };
  }

  onClick = () => {
    this.setState((prevState) => ({
      Movies: [...prevState.Movies, prevState.NewMovie],
      NewMovie: "",
    }));
  };

  openModal = () => {
    this.setState({ showModal: true });
    console.log("opened!");
  };

  closeModal = () => {
    this.setState({ showModal: false });
    console.log("closed!");
  };

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.showModal} onCancel={this.closeModal} />
        <input
          value={this.state.NewMovie}
          onChange={(e) => this.setState({ NewMovie: e.target.value })}
        />
        <Button onClick={this.onClick}>Add Movie</Button>
        <ul>
          {this.state.Movies.map((movie) => (
            <li>{movie}</li>
          ))}
        </ul>
        <Button onClick={this.openModal}>Modal</Button>
        <Button onClick={this.closeModal}>Close</Button>
      </React.Fragment>
    );
  }
}

export default MovieList;
