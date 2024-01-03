// 1. Crie uma função que recebe como parâmetro um número e retorna true se o
// número for par e false se for ímpar.

function eh_par(numero: number): boolean {
    return numero % 2 == 0;
}

console.log(eh_par(2)); // retorna true
console.log(eh_par(97)); // retorna false