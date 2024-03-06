// Template strings(``)

let nome = "Leonardo";
let sobrenome = "Marques";
let idade = 17;

// SEM Template string
let mensagem =
    "Meu nome é " + nome + " " + sobrenome + " e tenho " + idade + " anos.";

console.log(mensagem);

// COM Template string

let mensagem2 = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`;
console.log(mensagem2);
