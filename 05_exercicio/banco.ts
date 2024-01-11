// 1. Atualize a implementação da classe Banco apresentada em sala de acordo com as
// seguintes instruções:
// a. Altere o método inserir para que não seja possível contas com mesmo
// número;
// b. sacar(numero: string, valor: number): pesquisa uma conta e realiza uma
// operação de crédito com o valor passado;
// c. transferir(numeroCredito: string, numeroDebito: string, valor: number):
// realiza uma procura por ambas as contas e chama o método transferir de
// uma delas passando a conta de débito e o valor como parâmetros;
// d. Crie 3 métodos: um que retorne a quantidade de contas, outro que retorne
// o total de dinheiro depositado em todas as contas. Por fim, crie um método
// que retorne a média do saldo das contas chamando os dois métodos
// anteriores.
export class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number){
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0){
            return false;
        }

        this.saldo = this.saldo - valor;  
        return true;  
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    
    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(valor: number, contaDestino: Conta): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }

        return false;
    }
}

class Banco {
    banco: Conta[] = [];

    constructor (banco: Conta[]){
        this.banco = banco;
    }

    inserir(conta: Conta){
        let contaBuscada = this.consultar(conta.numero);

        if (contaBuscada == null){
            this.banco.push(conta);
        }
    }

    consultar(numero: string){
        for (let conta of this.banco){
            if (numero == conta.numero){
                return conta;
            }
        }

        return null;
    }

    depositar(numero: string, valor: number){
        let contaBuscada = this.consultar(numero);

        return contaBuscada?.depositar(valor);
    }

    sacar(numero: string, valor: number){
        let contaBuscada = this.consultar(numero);

        return contaBuscada?.sacar(valor);
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);

        if (contaCredito !== null && contaDebito !== null){
            return contaDebito.transferir(valor, contaCredito);
        }
    }

    quantidadeDeContas(){
        let contador = 0;

        for (let conta of this.banco){
            contador += 1;
        }

        return contador;
    }

    totalDepositado(){
        let total = 0;

        for (let conta of this.banco){
            total += conta.saldo;
        }

        return total;
    }

    mediaSaldo(){
        return this.totalDepositado() / this.quantidadeDeContas();
    }

    excluir(id: string) {
        let index = -1;

        for (let i = 0; i < this.banco.length; i++) {
            if (this.banco[i].numero == id) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            this.banco.splice(index, 1);
        }
    }
}

export default Banco;