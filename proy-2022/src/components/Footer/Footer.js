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
        <p>Cami</p>
        <p>Pedro</p>
      </footer>
    );
  }
}

export default Footer;
