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
    };
  }

  componentDidMount() {
    for (let i = 1; i < 50; i++) {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7bdc01d41b64d4396399e9ee70b4980b&language=en-US&page=`+i)
      .then((result) => result.json())
        .then((results) => {
          let moviesBackUpArray = this.state.moviesBackUp.concat(results.results)
          this.setState({
            moviesBackUp: moviesBackUpArray,
          });
          console.log("ESTAS SON LAS MOVIES", this.state.moviesBackUp)

          if (i = 1) {
            this.setState({
              moviesToRender: this.state.moviesBackUp.slice(0,this.state.moviesToRenderNumber),
            });
            console.log("ESTAS MOVIES SE VAN A RENDERIZAR", this.state.moviesToRender)
          }
          })
        .catch((error) => console.log(error));
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
            moviesToRenderNumber: 10,
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
    console.log("LLEGA LA FUNCION", textToSearch.target.value);
    let newMoviesToRender = this.state.moviesBackUp.filter((item) => item.original_title.toLowerCase().includes(textToSearch.target.value.toLowerCase())  == true)
    this.setState({
      moviesToRender: newMoviesToRender.slice(0,this.state.moviesToRenderNumber),
    })
  }

  render() {
    return (
      <>
      
      <section class="card-container">
          <article>
            <main>
              <div className="container-fluid">
                
                <form onSubmit={(event) => this.preventSubmit(event)} className="searchForm">
                  <input type="text" onChange={(event) => this.search(event)} value={this.state.textToSearch} placeholder="Buscar..." className="inputSearch"></input>
                </form>

                <div className="row container-movies">
                  {this.state.moviesBackUp.length > 0 ? this.state.moviesToRender.length > 0 ? this.state.moviesToRender.map((movie) => (
                    <Cards key={movie.original_title + movie.id} dataMovie={movie} delete={(itemToDeleteId) => this.delete(itemToDeleteId)} moreCards={(num) => this.moreCards(num)}></Cards>
                  )) : <p>No hay datos que coincidan con su búsqueda</p> : <p>Cargando...</p>}
                </div>
                    
                <div className="btnsDiv">
                  <button className="moreCardsBtn" onClick={() => this.moreCards()}>Cargar más tarjetas</button>          
                  <button className="moreCardsBtn" onClick={() => this.reset()}>Resetar tarjetas</button>          
                </div>

              </div>
            </main>
          </article>
        </section>
        
      </>
    );
  }
}
