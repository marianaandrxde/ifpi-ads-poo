// 4. Crie uma função que retorne os números de um array passados por parâmetro
// separados por traço (-) no formato string. Para isso, use o método forEach dos
// arrays.

function separador(numbers: number[]): string {
    let resultado: string = '';

    numbers.forEach((number, index) => {
        resultado += number;

        if (index < numbers.length - 1) {
            resultado += '-';
        }
    });

    return resultado;
}

const arrayDeNumeros = [1, 2, 3, 4, 5];
console.log(separador(arrayDeNumeros));
