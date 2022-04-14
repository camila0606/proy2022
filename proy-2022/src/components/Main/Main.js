import React, { Component } from "react";
import './Main.css'
import Cards from "../Cards/Cards";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesToRenderNumber: 10,
      moviesBackUp: [],
      movies: [],
      moviesToRender: [],
      textToSearch: "",
    };
  }

  componentDidMount() {

    for (let i = 1; i < 10; i++) {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7bdc01d41b64d4396399e9ee70b4980b&language=en-US&page=`+i)
      .then((result) => result.json())
        .then((results) => {
          let moviesBackUpArray = this.state.moviesBackUp.concat(results.results)
          this.setState({
            moviesBackUp: moviesBackUpArray,
          });
          console.log("ESTAS SON LAS MOVIES", this.state.moviesBackUp)
        })
        .catch((error) => console.log(error));

        if (i = 1) {
          this.setState({
            moviesToRender: this.state.moviesBackUp.slice(0,this.state.moviesToRenderNumber),
          });
          console.log("ESTAS MOVIES SE VAN A RENDERIZAR", this.state.moviesToRender)
        }
    }
  }

  delete(itemToDeleteId) {
    this.setState(
        {
          moviesToRender: this.state.moviesToRender.filter((item) => item.id != itemToDeleteId)
        }
    )
  }

  reset() {
      this.setState(
          {
            moviesToRender: this.state.moviesBackUp.slice(0,10),
          }
      )
  }

  moreCards() {
    this.setState(
      {
        moviesToRender: this.state.moviesBackUp.slice(0,this.state.moviesToRenderNumber + 10),
        moviesToRenderNumber: this.state.moviesToRenderNumber + 10,
      }
    )
    console.log("Movies To Render",this.state.moviesToRender)
  }

  preventSubmit(event) {
    event.preventDefault();
  }

  search(textToSearch) {
    let moviesSearched = this.state.moviesBackUp.filter((item) => item.name = true)
    let moviesToRender = moviesSearched.splice(0,this.state.moviesToRenderNumber)
    this.setState({
      moviesToRender: moviesToRender,
    })
  }

  render() {
    return (
      <>
        <form onSubmit={(event) => this.preventSubmit(event)}>
          <input type="text" onChange={(event) => this.search(event)} value={this.setState.textToSearch}></input>
        </form>
        <div className="container-m">
          <div className="row container-movies">
            {this.state.moviesToRender.map((movie) => (
              <Cards key={movie.original_title + movie.id} dataMovie={movie} delete={(itemToDeleteId) => this.delete(itemToDeleteId)} moreCards={(num) => this.moreCards(num)}></Cards>
            ))}
          </div>
        </div>
        <div>
          <button className="moreCardsBtn" onClick={() => this.moreCards()}>Cargar más tarjetas</button>          
        </div>
      </>
    );
  }
}
