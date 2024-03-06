// MAP = Percorrer todo um array

let lista = ["Leonardo", "Daniel", "Marina", "Jão"];
lista.map((item, index) => {
    console.log(`Passando: ${item} | Está na posição ${index}`);
});

// Reduce = O reduce busca reduzir um array

let numeros = [10, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} | Total até o momento.`);
    console.log(`${numero} | Valor atual.`);
    // console.log(`${indice} | Está na posição.`);
    // console.log(`${original} | Array original.`);
    console.log("===================");

    return (acumulador += numero);
});

console.log("Total do reduce: " + total);
