// FIND = busca em uma lista(array)

let listagem = [5, 3, "Leonardo", 2, "Daniel", "Daniel"];

let busca = listagem.find((item) => {
    return item === "Daniel";
});

console.log(busca);

// FILTER

let palavras = ["Leonardo", "Ana", "Bianca", "Matheus", "Ana", "Leo"];

let resultado = palavras.filter((item) => {
    return item === "Ana";
});

console.log(resultado);
