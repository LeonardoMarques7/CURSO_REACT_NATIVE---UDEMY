// Objetos
let pessoa = {
    // Propriedades
    nome: "Leonardo",
    sobrenome: "Marques",
    idade: "17",
    altura: "1.70",
    curso: "Desenvolvimento de Sistemas",
};

console.log(pessoa);
console.log(
    pessoa.nome + " " + pessoa.sobrenome + " está no curso de " + pessoa.curso
);

let carro = {
    // Propriedades
    modelo: "Dolphin mini",
    cor: "Prata",
    rodas: 4,
};

console.log(carro);
console.log(
    carro.modelo + " da cor " + carro.cor + " tem " + carro.rodas + " rodas."
);

// Array de Objetos
let usuarios = [
    { nome: "Leonardo", cargo: "Programador Front-end", status: "ATIVO" },
    { nome: "Daniel", cargo: "Programador Back-end", status: "ATIVO" },
    { nome: "Belina", cargo: "Designer", status: "ATIVO" },
];

console.log(usuarios);

// Dados do user 1, do array.
console.log(usuarios[1]);

// Retornando nome do user 0, do array.
console.log(usuarios[0].nome);
