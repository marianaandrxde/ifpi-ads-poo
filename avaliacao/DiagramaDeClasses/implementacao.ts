class Conta {
    private _nome: string;
    private _saldo: number;

    constructor(nome: string, saldo: number) {
        this._nome = nome;
        this._saldo = saldo;
    }

    get nome(): string{
        return this._nome;
    }

    get saldo(): number {
        return this._saldo;
    }
}

interface Tributavel {
    calcularTributos(): number;
}

class ContaCorrente extends Conta implements Tributavel {
    constructor(nome: string,saldo: number){
        super(nome, saldo);
    }

    calcularTributos(): number {
        return this.saldo * 0.1;
    }
}

class SeguroDeVida implements Tributavel {
    calcularTributos(): number {
        return 50;
    }
}

class AuditoriaInterna implements Tributavel{
    private _tributaveis: Tributavel[] = [];

    constructor(_tributaveis: Tributavel[]){
        this._tributaveis = _tributaveis;
    }

    calcularTributos(): number {
        let somatorio = 0;

        for(let i: number = 0; i < this._tributaveis.length; i++){
            somatorio += this._tributaveis[i].calcularTributos(); 
        }

        return somatorio;
    }

    adicionar(tributavel: Tributavel): void {
        this._tributaveis.push(tributavel);
    }
}

class Teste {
    private cc1: ContaCorrente = new ContaCorrente("Cliente1", 1000);
    private cc2: ContaCorrente = new ContaCorrente("Cliente2", 1500);
    private sv1 = new SeguroDeVida();
    private sv2 = new SeguroDeVida();

    private auditoria = new AuditoriaInterna([]);

    constructor() {
        this.auditoria.adicionar(this.cc1);
        this.auditoria.adicionar(this.cc2);
        this.auditoria.adicionar(this.sv1);
        this.auditoria.adicionar(this.sv2);
    }

    executarTestes(): void {
        const totalTributos = this.auditoria.calcularTributos();
        console.log("Total Tributos: R$ " + totalTributos.toFixed(2));
    }
}

let testes = new Teste();
testes.executarTestes();