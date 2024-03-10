import { Link } from "react-router-dom";

function Erro() {
    return (
        <div className="container-error">
            <h1 className="error">404</h1>
            <h2 className="error-page">Ops.. Não encontramos essa página!</h2>
            <Link to="/" className="button-filme">
                Voltar
            </Link>
        </div>
    );
}
export default Erro;
