// Datas

var data = new Date(); // Data atual.

console.log(data);

// Pegando apenas as horas.
console.log(data.getHours());

// Ou minutos
console.log(data.getMinutes());

// Ou até segundos e milissegundos.
console.log(data.getSeconds());
console.log(data.getMilliseconds());

// Criando uma data.
var dataNova = new Date("March 10, 2017");
console.log(dataNova);

// Convertando data.
console.log(Date.parse(dataNova));

// Pegando dia e mês.
console.log(dataNova.getDate());
console.log(dataNova.getMonth());

// Pegando dia da semana(domingo, segunda, terça, quarta, quinta, sexta).
console.log(dataNova.getDay());

// Pegando ano
console.log(dataNova.getFullYear());

// Formatando data
var dataFormatada =
    dataNova.getDate() +
    "/" +
    (dataNova.getMonth() + 1) +
    "/" +
    dataNova.getFullYear();

console.log(dataFormatada);

// Somando data
dataNova.setDate(dataNova.getDate() + 2); // Adicionando 2 dias, a partir da data 10.
console.log(dataNova.getDate());

// Pegando dia da semana, mas imprimindo no console.

var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

var diaDaSemana = dias[dataNova.getDay()];

console.log(diaDaSemana);
