// Desconstruindo objeto

let pessoa = {
    nome: "Leonardo",
    sobrenome: "Marques",
    cargo: "Programador Front-end",
    empresa: "Nexus community",
};

/*

let nome = "Lucas";

console.log(pessoa.nome);
console.log(pessoa.empresa);

// Podemos renomear nome: nomePessoa1 = Leonardo
const { nome: nomePessoa1, empresa, sobrenome, cargo } = pessoa;
console.log(nome, nomePessoa1, empresa, cargo);

*/

// Desconstruir um array

let nomes = ["Leonardo", "Lucas", "Bianca"];

/* 
console.log(nomes[1]);

let { 0: leonardo, 2: terceiraPessoa } = nomes;

console.log(leonardo);
console.log(terceiraPessoa);

*/

let [primeiroNome, segundoNome] = nomes;

console.log(primeiroNome);
console.log(segundoNome);
