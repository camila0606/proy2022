import React, { Component } from "react";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card card-movies mb-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.props.dataMovie.poster_path}`}
          alt=""
        />
        <h3>{this.props.dataMovie.original_title}</h3>
        <p class="description">{this.props.dataMovie.overview}</p>
        <section class="aditional-info">
          <p>Release Date: {this.props.dataMovie.release_date}</p>
          <p>Vote Count: {this.props.dataMovie.vote_count}</p>
          <p>Vote Average: {this.props.dataMovie.vote_average}</p>
        </section>
        <a href="">Ver más</a>
      </div>
    );
  }
}
