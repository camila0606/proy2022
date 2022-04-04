import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <header>
            <h1>Título/ Nombre de la app</h1>
            <section>
                <i class="fas fa-th"></i>
                <i class="fas fa-align-justify"></i>
                <form action="">
                    <input type="text" name="search" id="" placeholder="Search"/>
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </section>
        </header>
        <main>
            <button type="button">Cargar más tarjetas</button>
            <section class="card-container">
                <article>
                    <main>
                        <img src="./img/image-default.png" alt=""/>
                        <h3>Título/ Nombre</h3>
                        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                            laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                            perspiciatis! Sint, laboriosam cum.</p>
                        <section class="aditional-info">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        </section>
                        <a href="">Ver más</a>
                    </main>
                </article>
            </section>
        </main>

        <Footer />

    </div>
  );
}

export default App;
