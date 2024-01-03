import FiguraGeometrica from "./figura_geometrica";

class Circulo extends FiguraGeometrica{
    private raio: number;

    constructor(raio: number){
        super();
        this.raio = raio;
    }

    public calcularArea(): number {
        return 3.14 * Math.pow(this.raio,2);
    }

    public calcularPerimetro(): number {
        return 2 * 3.14 * this.raio;
    }
}

let c1: Circulo = new Circulo(7);
console.log(c1.calcularArea());
console.log(c1.calcularPerimetro());
