// Array
var lista = ["Vinicius", "Matheus", "Lucas", 2003];

// Imprimindo array
console.log(lista);

// Pegando por posição do array
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[3]);

// Acessando pelo indeOf
console.log(lista.indexOf("Lucas")); // Retornará o número da posição do nome Lucas(2)
console.log(lista.indexOf(2003));

// Se tentarmos acessar um item não existente
console.log(lista.indexOf("Carlos")); // Retornará -1, ou seja, não existe!

// Alterando item
var AlteradoLista = (lista[0] = "Felipe"); // Alterando de Vinicius para Felipe

console.log(AlteradoLista);

// Lista já alterada
console.log(lista);

// Adicionando item
lista.push("Bianca");

// Remoção de item
lista.shift(); // Removendo o primeiro item do Array
lista.pop(); // Removendo o último item do Array

// Para separarmos por algo os itens do Array
console.log(lista.join(" ; ")); // Separando por ;
console.log(lista.join(" | ")); // Separando por |
