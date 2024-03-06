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

function mediaAluno(nota1, nota2) {
    var media = (nota1 + nota2) / 2;

    if (media >= 6) {
        console.log("Aluno aprovado com a média: " + media);
    } else if (media < 6) {
        console.log("Aluno reprovado com a média: " + media);
    }
}

mediaAluno(6.2, 10);
mediaAluno(2.2, 5);

function aluno(nome, curso) {
    var mensagem = "Seja bem-vindo " + nome + " ao curso de " + curso;

    console.log(mensagem);
}

aluno("Leonardo Marques", "Desenvolvimento de Sistemas");
aluno("Daniel Moreira", "Farmácia");
