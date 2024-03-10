import { Link } from "react-router-dom";

function Erro() {
    return (
        <div>
            <h2>
                <b>Erro..</b> Parece que essa página não existe!
                <br />
                <span>Encontramos essas páginas: </span>
                <br />
                <Link to="/">Home</Link>
                <br />
                <Link to="/sobre">Sobre</Link>
                <br />
                <Link to="/contato">Contato</Link>
            </h2>
        </div>
    );
}

export default Erro;
