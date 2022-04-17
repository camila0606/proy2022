import React from "react";
import './Header.css'

function Header() {
  return (
    <div className="header">
      <h1>CineYa</h1>
      <section>
        <i class="fas fa-th"></i>
        <i class="fas fa-align-justify"></i>
        <ul>
                            <p className='order'>ASC/ DESC</p>
                            <div className="fasContainer">
                                <i className="fas fa-th" onClick={() => this.props.orientacion()}></i>
                                <i className="fas fa-align-justify" onClick={() => this.props.Orientacion()}></i>
                            </div>
                            
                        </ul>
      </section>
    </div>
  );
}

export default Header;
