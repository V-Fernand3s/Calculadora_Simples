import FormCalculadora from "./components/FormCalculadora";

import "./App.css";

function App() {

    return (
        <main className="app">

            <section className="calculadora-container">

                <div className="cabecalho-app">

                    <span className="icone-calculadora">
                        +
                    </span>

                    <div>
                        <h1>Calculadora</h1>

                        <p>
                            Realize seus cálculos de forma rápida e simples
                        </p>
                    </div>

                </div>

                <FormCalculadora />

                <footer className="rodape-app">
                    <p>
                        Calculadora desenvolvida em React
                    </p>
                </footer>

            </section>

        </main>
    );
}

export default App;
