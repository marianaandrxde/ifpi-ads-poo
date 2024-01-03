import FiguraGeometrica from "./figura_geometrica";

class Quadrado extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number){
        super();
        this.lado = lado;
    }

    public calcularArea(): number {
        return this.lado * this.lado;
    }

    public calcularPerimetro(): number {
        return 4 * this.lado;
    }
}

let q1: Quadrado = new Quadrado(20);
console.log(q1.calcularArea());
console.log(q1.calcularPerimetro());