// Funções anônimas

/*
    () => {}

    1- Os parênteses, que é por onde a função recebe os argumentos (assim como na funcoes tradicionais);
    2- "seta" => – responsável pelo nome “arrow”
    3- E as chaves: o bloco de código que representa o corpo da função.
*/

function somar(a, b) {
    let total = a + b;
    return console.log(total);
}

// somar(10, 15);

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    return console.log(total);
};

// subtrair(10, 3);

let numeros = [1, 3, 5, 10];

numeros.map((item) => {
    // Lógica do nosso MAP
    console.log(item);
});
