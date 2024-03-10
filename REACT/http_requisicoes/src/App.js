import { useEffect, useState } from "react";

import "./style.css";

// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
    const [nutri, setNutri] = useState([]);

    useEffect(() => {
        function loadApi() {
            let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    setNutri(json);
                });
        }

        loadApi();
    }, []);

    return (
        <div className="container">
            <header>
                <strong>React Nutri</strong>
            </header>

            {nutri.map((item) => {
                return (
                    <article key={item.id} className="post">
                        <h2 className="titulo">{item.titulo}</h2>
                        <img
                            src={item.capa}
                            alt="Foto do post"
                            className="capa"
                        />
                        <small>
                            Categoria: <strong>{item.categoria}</strong>
                        </small>
                        <p className="subtitulo">{item.subtitulo}</p>
                        <a href="" className="botao">
                            Acessar
                        </a>
                    </article>
                );
            })}
        </div>
    );
}

export default App;
