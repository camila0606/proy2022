import React, { Component } from "react";
import "./Main.css";
import Cards from "../Cards/Cards";
import Finder from "../Finder/Finder";
import MoreCards from "../MoreCards/MoreCards";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesToRenderNumber: 12,
      moviesBackUp: [],
      movies: [],
      moviesToRender: [],
      moviesToCharge: 5,
      orient: <i className="fas fa-solid fa-bars"> </i>,
      orientation: "row",
      orientClassName: "row container-movies",
    };
  }

  componentDidMount() {
    let fetchUrl = `https://api.themoviedb.org/3/movie/${this.props.fetch}?api_key=7bdc01d41b64d4396399e9ee70b4980b&language=en-US&page=`
    for (let i = 1; i < 51; i++) {
      fetch(fetchUrl + i)
        .then((result) => result.json())
        .then((results) => {
          let moviesBackUpArray = this.state.moviesBackUp.concat(
            results.results
          );
          this.setState({
            moviesBackUp: moviesBackUpArray,
          });
          console.log("ESTAS SON LAS MOVIES", this.state.moviesBackUp);

          if (i === 1) {
            this.setState({
              moviesToRender: this.state.moviesBackUp.slice(0, this.state.moviesToRenderNumber),
              firstRender: this.state.moviesBackUp.slice(0, this.state.moviesToRenderNumber),
            });
            console.log("ESTAS MOVIES SE VAN A RENDERIZAR", this.state.moviesToRender);
          }
        })
        .catch((error) => console.log(error));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.fetch !== prevProps.fetch) {
      console.log("COMPONENT UPDATE");
      this.setState({
        moviesBackUp: [],
      });
      let fetchUrl = `https://api.themoviedb.org/3/movie/${this.props.fetch}?api_key=7bdc01d41b64d4396399e9ee70b4980b&language=en-US&page=`
      for (let i = 1; i < 51; i++) {
        fetch(fetchUrl + i)
          .then((result) => result.json())
          .then((results) => {
            let moviesBackUpArray = this.state.moviesBackUp.concat(results.results);
            this.setState({
              moviesBackUp: moviesBackUpArray,
            });
            console.log("ESTAS SON LAS MOVIES", this.state.moviesBackUp);

            if (i === 1) {
              this.setState({
                moviesToRender: this.state.moviesBackUp.slice(0, this.state.moviesToRenderNumber),
                firstRender: this.state.moviesBackUp.slice(0, this.state.moviesToRenderNumber),
              });
              console.log("ESTAS MOVIES SE VAN A RENDERIZAR", this.state.moviesToRender);
            }
          })
          .catch((error) => console.log(error));
      }
    }
  }
  

  delete(itemToDeleteId) {
    this.setState({
      moviesToRender: this.state.moviesToRender.filter(
        (item) => item.id !== itemToDeleteId
      ),
    });
  }

  reset() {
    console.log("RESET",this.state.moviesBackUp);
    this.setState({
      moviesToRender: this.state.firstRender,
      moviesToRenderNumber: 12,
    });
  }

  changeState(event) {
    this.setState({moviesToCharge: event.target.value});
    console.log(event.target.value);
  }

  moreCards(num) {
    let moviesToRenderNumber = parseInt(this.state.moviesToRenderNumber)
    let newNum = parseInt(num)
    let newMoviesToRenderNumber = newNum + moviesToRenderNumber
    console.log("estas peliculas se renderizan", newMoviesToRenderNumber);
    this.setState({
      moviesToRender: this.state.moviesBackUp.slice(0, newMoviesToRenderNumber),
      moviesToRenderNumber: newMoviesToRenderNumber,
    });
    console.log(this.state.moviesToCharge)
    console.log("Movies To Render", this.state.moviesToRender);
  }

  preventSubmit(event) {
    event.preventDefault();
  }

  search(textToSearch) {
    console.log("LLEGA LA FUNCION", textToSearch.target.value);
    let newMoviesToRender = this.state.moviesBackUp.filter(
      (item) =>
        item.title.toLowerCase().includes(textToSearch.target.value.toLowerCase()) === true
    );
    this.setState({
      moviesToRender: newMoviesToRender.slice(
        0,
        this.state.moviesToRenderNumber
      ),
    });
  }

  orient() {
    if (this.state.orientation == "row") {
      this.setState({
        orient: <i class="fas fa-solid fa-border-all"></i>,
        orientation: "col",
        orientClassName: "container-movies-2",
      });
    } else {
      this.setState({
        orient: <i className="fas fa-solid fa-bars"> </i>,
        orientation: "row",
        orientClassName: "row container-movies",
      });
    }
  }

  sort(param) {
    console.log(param);
    let moviesToSort = this.state.moviesBackUp
      let sortMovies = moviesToSort.sort(function (a, b) {
        if (param == "original_title") {
          if (a.original_title > b.original_title) {
            return 1;
          }
          if (a.original_title < b.original_title) {
            return -1;
          }
          // a must be equal to b
          return 0;
        } else  if (param == "popularity") {
          if (a.popularity > b.popularity) {
            return -1;
          }
          if (a.popularity < b.popularity) {
            return 1;
          }
          // a must be equal to b
          return 0;
        } else if (param == "vote_average") {
          if (a.vote_average > b.vote_average) {
            return -1;
          }
          if (a.vote_average < b.vote_average) {
            return 1;
          }
          // a must be equal to b
          return 0;
        } else if (param == "release_date") {
          if (a.release_date > b.release_date) {
            return 1;
          }
          if (a.release_date < b.release_date) {
            return -1;
          }
          // a must be equal to b
          return 0;
        }

      });

    let sortMoviesToRender = sortMovies.slice(0,this.state.moviesToRenderNumber)

    this.setState({
      // moviesBackUp: sortMovies,
      moviesToRender: sortMoviesToRender,
    })
    
  }

  render() {
    return (
      <>
        <Finder finder={(event) => this.search(event)}></Finder>

        <div className="filterDiv">
          <button className="filterBtn" onClick={() => this.orient()} type="button">
           Orientación {this.state.orient}
          </button>

          <button className="filterBtn" onClick={() => this.sort("original_title")} type="button">
            Ordenar A-Z
          </button>

          <button className="filterBtn" onClick={() => this.sort("popularity")} type="button">
            Ordenar popularidad
          </button>

          <button className="filterBtn" onClick={() => this.sort("vote_average")} type="button">
            Ordenar valoración
          </button>

          <button className="filterBtn" onClick={() => this.sort("release_date")} type="button">
            Ordenar fecha de lanzamiento
          </button>

          <button className="filterBtn" onClick={() => this.reset()}>
            Resetear tarjetas
          </button>

        </div>

        <section class="card-container">
          <article>
            <main>
              <div className="container-fluid">
                
                <div className={this.state.orientClassName}>
                  {this.state.moviesBackUp.length > 0 ? (
                    this.state.moviesToRender.length > 0 ? (
                      this.state.moviesToRender.map((movie) => (
                        <Cards key={movie.original_title + movie.id} dataMovie={movie} delete={(itemToDeleteId) => this.delete(itemToDeleteId)} moreCards={(num) => this.moreCards(num)} orientation={this.state.orientation}></Cards>
                      ))
                    ) : (
                      <p>No hay peliculas que coincidan con su búsqueda</p>
                    )
                  ) : (
                    <img src="img/loader.gif" />
                  )}
                </div>

                <MoreCards changeState={(event) => this.changeState(event)} inputValue={this.state.moviesToCharge} clickMethod={() => this.moreCards(this.state.moviesToCharge)}></MoreCards>
        
              </div>
            </main>
          </article>
        </section>
      </>
    );
  }
}
