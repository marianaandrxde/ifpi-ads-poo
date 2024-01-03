import FiguraGeometrica from "./figura_geometrica";

class Triangulo extends FiguraGeometrica{
    private base: number;
    private altura: number;
    private lado1: number;
    private lado2: number;

    constructor(base: number, altura: number, lado1: number, lado2: number){
        super();
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    public calcularArea(): number {
        return (this.base * this.altura) / 2;
    }

    public calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.base;
    }
}

let t1: Triangulo = new Triangulo(10,42, 43.17, 43.17);
console.log(t1.calcularArea());
console.log(t1.calcularPerimetro());
