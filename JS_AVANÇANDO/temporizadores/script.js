// setInterval
/*

// Usando função anônima
var timer = setInterval(() => {
    document.write("Escrevendo... <br />");
}, 1000);

// Limpando/Parando nosso setInterval
// clearInterval(timer);

*/

// setTimeout

function acao() {
    document.write("Executando.. <br>");
}

setTimeout(acao, 3000);
setTimeout(() => {
    console.log("Executou nosso timeout");
}, 3000);
