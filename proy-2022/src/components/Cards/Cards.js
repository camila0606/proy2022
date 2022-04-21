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
      <div className="card-movies mb-">
        <img
          src={`https://image.tmdb.org/t/p/w342/${this.props.dataMovie.poster_path}`}
          alt=""
          className="card-img"
        />
        <div>
          <h3 className="card-name">{this.props.dataMovie.original_title}</h3>

          {this.state.viewMore === true ? (
            <section className="aditional-info">
              <p className="description">{this.state.originalDesc}</p>
              <p>Release Date: {this.props.dataMovie.release_date}</p>
              <p>Vote Count: {this.props.dataMovie.vote_count}</p>
              <p>Vote Average: {this.props.dataMovie.vote_average}</p>
            </section>
          ) : (
            <p className="description">
              {this.state.shortDesc}
              {this.state.originalDesc.length > 100 ? "..." : ""}
            </p>
          )}
          <div className="btnsDiv">
            <p className="showMoreBtn" onClick={() => this.showMore()}>
              {this.state.viewMore === true ? (
                <i className="fa fa-minus" aria-hidden="true"> Ver menós</i>
              ) : (
                <i className="fa fa-plus" aria-hidden="true"> Ver más</i>
              )}
            </p>
            <p
              onClick={() => this.props.delete(this.props.dataMovie.id)}
              className="deleteBtn"
            >
              <i className="fa fa-trash" aria-hidden="true"> Borrar</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
