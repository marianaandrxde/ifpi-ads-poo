import Funcionario from "./funcionario";

class Gerente extends Funcionario {
    public getBonificacao(): number {
        return this.salario * 0.4;
    }
}

let g1: Gerente = new Gerente(2500);
console.log(g1.getBonificacao());

export default Gerente;