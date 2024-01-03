import FiguraGeometrica from "./figura_geometrica";

class Retangulo extends FiguraGeometrica{
    private base: number;
    private altura: number;

    constructor(base: number, altura: number){
        super();
        this.base = base;
        this.altura = altura;
    }

    public calcularArea(): number {
        return this.base * this.altura;
    }

    public calcularPerimetro(): number {
        return (this.base * 2) + (this.altura * 2);
    }
}

let r1: Retangulo = new Retangulo(20,40);
console.log(r1.calcularArea());
console.log(r1.calcularPerimetro());
