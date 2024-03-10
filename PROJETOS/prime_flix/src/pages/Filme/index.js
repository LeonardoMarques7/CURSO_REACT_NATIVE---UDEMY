import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./filme.css";

import { Toast, toast } from "react-toastify";

import api from "../../services/api";

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api
                .get(`/movie/${id}`, {
                    params: {
                        api_key: "28fc232cc001c31e8a031f419d0a14ca",
                        language: "pt-BR",
                    },
                })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("FILME NAO ENCONTRADO");
                    navigate("/", { replace: true });
                    return;
                });
        }

        loadFilme();

        return () => {
            console.log("COMPONENTE FOI DESMONTADO");
        };
    }, [navigate, id]);

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some(
            (filmesSalvo) => filmesSalvo.id === filme.id
        );

        if (hasFilme) {
            toast.warn("Este filme já está na sua lista!");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    }

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        );
    }

    return (
        <div className="filme-info">
            <h1 className="filme-title">{filme.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                alt={filme.title}
                className="filme-image"
            />
            <strong className="filme-avaliation">
                Avalição: {filme.vote_average} / 10
            </strong>

            <h3 className="filme-subtitle">Sinopse</h3>
            <span className="filme-description">{filme.overview}</span>

            <div className="container-actions">
                <button onClick={salvarFilme} className="button-primary">
                    Salvar
                </button>
                <button className="button-secondary">
                    <a
                        target="blank"
                        rel="external"
                        href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
                    >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;
