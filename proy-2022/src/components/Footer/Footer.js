import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <footer className="footer">
        <p>Ian Jamui</p>
        <p>Camila Escontrela</p>
        <p>Pedro Pla</p>
      </footer>
    );
  }
}

export default Footer;
