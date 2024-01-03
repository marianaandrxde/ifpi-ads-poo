// Crie um exemplo usando a função map para dobrar os elementos de um array e
// reduce para totalizar a soma dos elementos do array.

let numbers = [1, 2, 3, 4, 5];

// map
const numbersDobrado = numbers.map(numero => numero * 2);

console.log("Dobrado:", numbersDobrado); // saída = [2, 4, 6, 8, 10]

// reduce
const somaDobrada = numbersDobrado.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log("Soma dos elementos dobrados:", somaDobrada); // saída = 30
