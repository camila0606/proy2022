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
        <Main></Main>
      </main>
      <Footer />
    </div>
  );
}

export default App;
