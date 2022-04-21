import React, { Component } from "react";
import './Finder.css'

class Finder extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  preventSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <div className="banner">
            <h1 className="banner-title">La información de tus peliculas en solo lugar</h1>
            <form onSubmit={(event) => this.preventSubmit(event)} className="searchForm">
            <input
                type="text"
                onChange={(event) => this.props.finder(event)}
                value={this.state.textToSearch}
                placeholder="Buscar peliculas en la página..."
                className="inputSearch"
            ></input>
            </form>
        </div>
    );
  }
}

export default Finder;
