// Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
// calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
// ao raio e exiba a área e o perímetro chamando os dois métodos definidos.
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        return 3 * Math.pow(this.raio, 2);
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * 3.14 * this.raio;
    };
    return Circulo;
}());
var circulo = new Circulo(3);
console.log("\u00C1REA: ".concat(circulo.calcularArea()));
console.log("PER\u00CDMETRO: ".concat(circulo.calcularPerimetro()));
