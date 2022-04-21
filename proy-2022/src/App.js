import React, { Component } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    fetch: "popular"
  };

  onChangeFetch(event) {
    this.setState({fetch: event.target.value});
  }


  render() {
    return (
      <div className="content-wrapper">
        <header>
          <Header functionOnChange={(event) => this.onChangeFetch(event)} fetchValue={this.state.fetch}></Header>
        </header>
        <main>
          <Main fetch={this.state.fetch}></Main>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

