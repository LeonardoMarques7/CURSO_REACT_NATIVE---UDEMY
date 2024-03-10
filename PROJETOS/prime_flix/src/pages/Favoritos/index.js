import { useEffect, useState } from "react";

import { Toast, toast } from "react-toastify";
import { Link } from "react-router-dom";

import "./favoritos.css";

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((filme) => {
            return filme.id !== id;
        });

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso!");
    }

    return (
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && (
                <span>Você não possui nenhum filme salvo :(</span>
            )}

            <ul className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <li key={filme.id} className="container-filme">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                                alt={filme.title}
                            />
                            <h2 className="title-filme-details">
                                {filme.title}
                            </h2>
                            <div className="actions-filme">
                                <Link
                                    to={`/filme/${filme.id}`}
                                    className="button-primary link"
                                >
                                    Ver detalhes
                                </Link>
                                <button
                                    onClick={() => excluirFilme(filme.id)}
                                    className="button-primary"
                                >
                                    Excluir
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Favoritos;
