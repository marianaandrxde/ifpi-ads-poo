// 9. Altere a classe conta dos slides conforme as instruções abaixo: 
// • Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o  saque deixe saldo negativo, o mesmo não será realizado, retornando falso; 
// • Altere o método transferir() para que retorne também um valor lógico e que  não seja feita a transferência caso o sacar() na conta origem não seja  satisfeito; 
// • Verifique as diferentes operações implementadas. 

class Conta {
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

let c1: Conta = new Conta('122', 222);
let c2: Conta = new Conta('222', 422);
console.log(c1.sacar(200)); // retorna true, saldo c1 = 22
console.log(c1.transferir(100, c2)); // retorna false, saldo insuficiente
console.log(c2.transferir(400, c1)); // retorna true