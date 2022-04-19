import React, { Component } from "react";
import "./Cards.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMore: false,
      originalDesc: this.props.dataMovie.overview,
      shortDesc: this.props.dataMovie.overview.slice(0, 100),
    };
  }

  showMore() {
    if (this.state.viewMore === false) {
      this.setState({
        viewMore: true,
      });
    } else {
      this.setState({
        viewMore: false,
      });
    }
  }

  render() {
    return (
      <div className="card-movies mb-4">
        <img
          src={`https://image.tmdb.org/t/p/w342/${this.props.dataMovie.poster_path}`}
          alt=""
          className="card-img"
        />
        <h3 className="card-name">{this.props.dataMovie.original_title}</h3>

        {this.state.viewMore === true ? (
          <section class="aditional-info">
            <p class="description">{this.state.originalDesc}</p>
            <p>Release Date: {this.props.dataMovie.release_date}</p>
            <p>Vote Count: {this.props.dataMovie.vote_count}</p>
            <p>Vote Average: {this.props.dataMovie.vote_average}</p>
          </section>
        ) : (
          <p class="description">
            {this.state.shortDesc}
            {this.state.originalDesc.length > 100 ? "..." : ""}
          </p>
        )}
        <div className="btnsDiv">
          <p className="showMoreBtn" onClick={() => this.showMore()}>
            {this.state.viewMore === true ? (
              <i class="fa fa-minus" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-plus" aria-hidden="true"></i>
            )}
          </p>
          <p
            onClick={() => this.props.delete(this.props.dataMovie.id)}
            className="deleteBtn"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    );
  }
}
