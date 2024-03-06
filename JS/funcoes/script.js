let text = document.getElementById("area");

function entrar() {
    var nome = prompt("Qual é seu nome?");

    if (nome === "" || nome === null) {
        alert("Algo deu errado :(");
        text.innerHTML = "Clique no botão para acessar...";
    } else {
        text.innerHTML = "Bem vindo! " + nome + ". ";

        let botaoSair = document.createElement("button");

        botaoSair.innerText = "Sair do programa!";
        botaoSair.onclick = sair;

        text.appendChild(botaoSair);
    }
}

function sair() {
    alert("Até mais..");

    text.innerHTML = "Você saiu... Clique no botão para voltar!";
}
