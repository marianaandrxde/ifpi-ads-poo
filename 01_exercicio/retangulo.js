// 7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
// adicional chamado que calcule o perímetro do retângulo e altere a classe
// TestaRetangulo para exibir o cálculo do perímetro.
var Retangulo = /** @class */ (function () {
    function Retangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return 2 * (this.base + this.altura);
    };
    return Retangulo;
}());
var retangulo = new Retangulo(4, 5);
console.log("Per\u00EDmetro = ".concat(retangulo.calcularPerimetro()));
