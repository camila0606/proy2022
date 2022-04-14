import React from "react";
import Finder from "../Finder/Finder";
import './Header.css'

function Header() {
  return (
    <div className="header">
      <h1>CineYa</h1>
      <section>
        <i class="fas fa-th"></i>
        <i class="fas fa-align-justify"></i>
        <Finder></Finder>
      </section>
    </div>
  );
}

export default Header;
