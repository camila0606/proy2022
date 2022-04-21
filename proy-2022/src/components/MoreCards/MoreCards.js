import React, { Component } from "react";
import './MoreCards.css'

class MoreCards extends Component {
  constructor(props) {
    super(props);
  }
  state = {};


  render() {
    return (
      <>
      <button className="moreCardsForm" onClick={() => this.props.clickMethod(this.state.moviesToCharge)} >
        <label className="moreCardsLabel">Cargar {this.props.inputValue} tarjetas más</label>
      </button>

      <div>
        <label className="numberLbl">Tarjetas a cargar: </label>
        <input className="moreCardsInput" type="number" value={this.props.inputValue} onChange={(event) => this.props.changeState(event)} />
      </div>
      
      </>
    );
  }
}

export default MoreCards;
