interface IFiguraGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}


interface IComparavel extends IFiguraGeometrica {
    comparar(outraForma: IFiguraGeometrica): number;
}


class Retangulo implements IComparavel {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }

    comparar(outraForma: IFiguraGeometrica): number {
        let areaDaForma = this.calcularArea();
        let areaDaOutraForma = outraForma.calcularArea();

        if (areaDaForma < areaDaOutraForma) {
            return -1;
        } else if (areaDaForma === areaDaOutraForma) {
            return 0;
        } else {
            return 1;
        }
    }
}


class Circulo implements IComparavel {
    private raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return 3.14 * Math.pow(this.raio, 2);
    }

    calcularPerimetro(): number {
        return 2 * 3.14 * this.raio;
    }

    comparar(outraForma: IFiguraGeometrica): number {
        let areaDaForma = this.calcularArea();
        let areaDaOutraForma = outraForma.calcularArea();

        if (areaDaForma < areaDaOutraForma) {
            return -1;
        } else if (areaDaForma === areaDaOutraForma) {
            return 0;
        } else {
            return 1;
        }
    }
}


class Quadrado implements IComparavel {
    private lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }

    comparar(outraForma: IFiguraGeometrica): number {
        let areaDaForma = this.calcularArea();
        let areaDaOutraForma = outraForma.calcularArea();

        if (areaDaForma < areaDaOutraForma) {
            return -1;
        } else if (areaDaForma === areaDaOutraForma) {
            return 0;
        } else {
            return 1;
        }
    }
}


class Triangulo implements IComparavel {
    private base: number;
    private altura: number;
    private lado1: number;
    private lado2: number;

    constructor(base: number, altura: number, lado1: number, lado2: number) {
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.base;
    }

    comparar(outraForma: IFiguraGeometrica): number {
        let areaDaForma = this.calcularArea();
        let areaDaOutraForma = outraForma.calcularArea();

        if (areaDaForma < areaDaOutraForma) {
            return -1;
        } else if (areaDaForma === areaDaOutraForma) {
            return 0;
        } else {
            return 1;
        }
    }
}


class Teste {
    comparar(primeiraForma: IComparavel, segundaForma: IComparavel): number {
        return primeiraForma.comparar(segundaForma);
    }

    constructor() {
        let retangulo: Retangulo = new Retangulo(8, 4); // Área = 32cm
        let circulo: Circulo = new Circulo(8); // Área = 201.1
        let quadrado: Quadrado = new Quadrado(10); // Área = 100
        let triangulo: Triangulo = new Triangulo(100, 2, 50, 25);

        console.log(this.comparar(retangulo, circulo)); // retorna -1, pois é MENOR;
        console.log(this.comparar(circulo, quadrado)); // retorna 1, MAIOR;
        console.log(this.comparar(quadrado, triangulo)); // retorna 0, IGUAL.
    }
}

let teste = new Teste();
