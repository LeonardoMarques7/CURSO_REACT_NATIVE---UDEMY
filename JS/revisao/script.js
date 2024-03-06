/*

Calculo do IMC: 

Abaixo de 17 = Muito abaixo do peso;
Entre 17 e 18,49 = Abaixo do peso;
Entre 18,5 e 24,99 = Peso normal;
Entre 25 e 29,99 = Acima do peso.

Lembrando que a fórmula é peso / (altura * altura);

*/

// Variáveis
var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault(); // Prevendo o evento de submit

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    resultado = document.getElementById("resultado");

    imc = peso / (altura * altura);

    if (imc < 17) {
        resultado.innerHTML =
            "<br /> Seu resultado foi: " +
            imc.toFixed(2) + // Aplicando o método toFixed para termos apenas duas casas decimais.
            " <br /> Cuidado você está muito abaixo do peso!";
    } else if (imc > 17 && imc <= 18.49) {
        resultado.innerHTML =
            "<br /> Seu resultado foi: " +
            imc.toFixed(2) +
            " <br /> Você está muito abaixo do peso!";
    } else if (imc >= 18.5 && imc < 24.99) {
        resultado.innerHTML =
            "<br /> Seu resultado foi: " +
            imc.toFixed(2) +
            " <br /> Você está no peso ideal!";
    } else if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML =
            "<br /> Seu resultado foi: " +
            imc.toFixed(2) +
            " <br />  Você está acima do peso!";
    } else if (imc >= 30) {
        resultado.innerHTML =
            "<br /> Seu resultado foi: " +
            imc.toFixed(2) +
            " <br />  Cuidado você está muito acima do peso!!";
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}
