// Diferenças entre VAR, LET e CONST

// VAR

var nome = "Leonardo";

if (nome === "Leonardo") {
    var curso = "Desenvolvimento de Sistemas";
    console.log(curso);
}

curso = "Eventos";

console.log(curso);

// LET

if (nome === "Leonardo") {
    let cargo = "CEO - Nexus Community";
    console.log(cargo);
}

cargo = "Designer"; // Ele não modificou a variável 'let', mas sim criou uma nova. Isso ocorre porque com o 'let', não podemos fazer alterações fora do escopo.

console.log(cargo);

let bonus = true;

console.log(bonus);

if (bonus) {
    // Isso significa que o bônus é verdadeiro(true).
    let salario = 3000 + 500;
    console.log("Seu salário é " + salario);
}

// CONST

const escola = "Etec Fernando Pretes";

// Ocorreu um erro porque a troca de valores da variável não é possível.
escola = "Etec blablabla";

// E também a constante tem que ser declarada com um valor
const sobrenome;

// Maneira correta: const sobrenome = "Marques";