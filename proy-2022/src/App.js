import Main from "./components/Main/Main";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="content-wrapper">
      <header>
        <Header></Header>
      </header>
      <main>
        <button type="button">Cargar más tarjetas</button>
        <section class="card-container">
          <article>
            <main>
              <div className="container-fluid">
                <Main></Main>
              </div>
            </main>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
