import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Bem vindo a pagina HOME</h1>

            <hr />

            <Link to="/produto/12345">Acessar produto 12345</Link>
        </div>
    );
}

export default Home;
