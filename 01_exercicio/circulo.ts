// 8 - Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
// calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
// ao raio e exiba a área e o perímetro chamando os dois métodos definidos.

class Circulo {
    raio: number;

    constructor(raio: number){
        this.raio = raio;
    }

    calcularArea(): number {
        return 3.14 * Math.pow(this.raio, 2);
    }

    calcularPerimetro(): number {
        return 2 * 3.14 * this.raio;
    }
}

let circulo: Circulo = new Circulo(3);
console.log(`ÁREA: ${circulo.calcularArea()}`)
console.log(`PERÍMETRO: ${circulo.calcularPerimetro()}`)