import Main from "./components/Main/Main";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <header>
        <h1>Título/ Nombre de la app</h1>
        <section>
          <i class="fas fa-th"></i>
          <i class="fas fa-align-justify"></i>
          <form action="">
            <input type="text" name="search" id="" placeholder="Search" />
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </section>
      </header>
      <main>
        <button type="button">Cargar más tarjetas</button>
        <section class="card-container">
          <article>
            <main>
              <Main></Main>
            </main>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
