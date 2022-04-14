import React, { Component } from "react";
import Cards from "../Cards/Cards";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      next: 0,
    };
  }

  componentDidMount() {
    fetch(
      `
        https://api.themoviedb.org/3/movie/popular?api_key=7bdc01d41b64d4396399e9ee70b4980b&language=en-US&page=1`
    )
      .then((result) => result.json())
      .then((results) => {
        console.log(results);
        this.setState({
          movies: results.results,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="container-m">
        <div className="row container-movies">
          {this.state.movies.map((movie, idx) => (
            <Cards
              key={movie.original_title + movie.id}
              dataMovie={movie}
            ></Cards>
          ))}
        </div>
      </div>
    );
  }
}
