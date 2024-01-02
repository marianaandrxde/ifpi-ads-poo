// 7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
// adicional chamado que calcule o perímetro do retângulo e altere a classe
// TestaRetangulo para exibir o cálculo do perímetro.

class Retangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
}

let retangulo: Retangulo = new Retangulo(4,5);
console.log(`Perímetro = ${retangulo.calcularPerimetro()}`)