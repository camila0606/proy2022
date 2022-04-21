import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
    <div className="header">
      <div className="logo">
        <img src="img/movieYa-logo.png" className="header-img"/>
        <h1 className="header-title">Cine Ya!</h1>
      </div>
      <div className="fecthBtns">
        <label className="fetchLbl">Peliculas:</label>
        <select onChange={(event) => this.props.functionOnChange(event)} value={this.props.fetchValue}>
          <option value={"popular"}>Populares</option>
          <option value={"top_rated"}>Mejor valoradas</option>
          <option value={"now_playing"}>Ahora en cines</option>
          <option value={"upcoming"}>Próximos lanzamientos</option>
        </select>
      </div>
    </div>
      
    );
  }
}

export default Header;
