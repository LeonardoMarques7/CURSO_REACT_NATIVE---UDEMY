// Res Operator
/*

function convidados(...nomes) {
    console.log("Seja bem vindos todos os convidados!");
    console.log(nomes);
}

convidados("Leonardo", "Daniel", "Manoela");

*/

function geradorNum(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);

    console.log("Número gerado foi o " + numeros[numeroGerado]);
}

geradorNum(1, 2, 5, 45, 95, 105);
