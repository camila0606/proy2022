import React from "react";
import Finder from "../Finder/Finder";

function Header() {
  return (
    <div>
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
