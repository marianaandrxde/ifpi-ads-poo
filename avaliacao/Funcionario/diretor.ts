import Gerente from "./funcionario";

class Diretor extends Gerente {
    public getBonificacao(): number {
        return this.salario * 0.6;
    }
}

let d1: Gerente = new Diretor(3000);
console.log(d1.getBonificacao());
