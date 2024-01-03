// 2. Crie uma função que recebe como parâmetro um número e retorna true se o
// número for primo e false caso contrário.

function eh_primo(numero: number): boolean {
    if (numero <= 1) {
        return false; 
    }

    for (let i: number = numero; i >= 2; i--) {
        if (numero % i === 0 && i !== numero) {
            return false; 
        }
    }

    return true;
}

console.log(eh_primo(7)); // retorna true
console.log(eh_primo(4)); // retorna false

