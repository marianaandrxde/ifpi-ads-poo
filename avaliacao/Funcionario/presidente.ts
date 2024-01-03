import Funcionario from "./funcionario";

class Presidente extends Funcionario {
    public getBonificacao(): number {
        return this.salario + 1000;
    }
}

let p1: Presidente = new Presidente(7633);
console.log(p1.getBonificacao());
