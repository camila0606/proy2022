import React, { Component } from "react";
import "./Cards.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMore: false,
      originalDesc: this.props.dataMovie.overview,
      shortDesc: this.props.dataMovie.overview.slice(0, 50),
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
      <div className={this.props.orientation == "row" ? "card-movies" : "card-movies-col"}>
        <img
          src={`https://image.tmdb.org/t/p/w342/${this.props.dataMovie.poster_path}`}
          alt=""
          className={this.props.orientation == "row" ? "card-img" : "card-img-col"}
        />
        <div className="card-info">
          <h3 className="card-name">{this.props.dataMovie.title}</h3>

          {this.state.viewMore === true ? (
            <section className="aditional-info">
              <p className="description">{this.state.originalDesc}</p>
              <p className="description">Release Date: {this.props.dataMovie.release_date}</p>
              <p className="description">Vote Count: {this.props.dataMovie.vote_count}</p>
              <p className="description">Vote Average: {this.props.dataMovie.vote_average}</p>
            </section>
          ) : (
            <p className="description">
              {this.props.orientation === "row" ? this.state.shortDesc : this.state.originalDesc}
              {this.props.orientation === "col" ? "" : this.state.originalDesc.length > 50 ? "..." : ""}
            </p>
          )}
          <div className="btnsDiv">
            <p className="showMoreBtn" onClick={() => this.showMore()}>
              {this.state.viewMore === true ? (
                <i className="fa fa-minus" aria-hidden="true"> </i>
              ) : (
                <i className="fa fa-plus" aria-hidden="true"> </i>
              )}
            </p>
            <p
              onClick={() => this.props.delete(this.props.dataMovie.id)}
              className="deleteBtn"
            >
              <i className="fa fa-trash" aria-hidden="true"> </i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
