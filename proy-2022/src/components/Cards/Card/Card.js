import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img src="./img/image-default.png" alt="" />
        <h3>Título/ Nombre</h3>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque
          velit minus facere laboriosam voluptatem impedit ea unde labore optio
          eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint,
          laboriosam cum.
        </p>
        <section class="aditional-info">
          <p>Info Adicional 1 :</p>
          <p>Info Adicional 2:</p>
          <p>Info Adicional 3:</p>
        </section>
        <a href="">Ver más</a>
      </div>
    );
  }
}

export default Card;
