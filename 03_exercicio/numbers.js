function separador(numbers) {
    var resultado = '';
    numbers.forEach(function (number, index) {
        resultado += number;
        if (index < numbers.length - 1) {
            resultado += '-';
        }
    });
    return resultado;
}
var arrayDeNumeros = [1, 2, 3, 4, 5];
console.log(separador(arrayDeNumeros));
