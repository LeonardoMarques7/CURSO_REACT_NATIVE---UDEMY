// Spread Operator
/*

let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 6];

console.log(numeros);


let pessoa = {
    nome: "Leonardo",
    sobrenome: "Marques",
    cargo: "Programador Front-end",
    empresa: "Nexus community",
};

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    idade: 17,
};

console.log(novaPessoa);

*/

function novoUsuario(info) {
    console.log(info);
    let dados = {
        ...info,
        status: "ATIVO",
        iniciando: "10/04/2023",
        codigo: "123123",
    };

    console.log(dados);
}

novoUsuario({ nome: "Leonardo", sobrenome: "Marques", cargo: "DEV" });
