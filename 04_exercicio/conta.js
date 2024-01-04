// 9. Altere a classe conta dos slides conforme as instruções abaixo: 
// • Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o  saque deixe saldo negativo, o mesmo não será realizado, retornando falso; 
// • Altere o método transferir() para que retorne também um valor lógico e que  não seja feita a transferência caso o sacar() na conta origem não seja  satisfeito; 
// • Verifique as diferentes operações implementadas. 
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo - valor < 0) {
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (valor, contaDestino) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    };
    return Conta;
}());
var c1 = new Conta('122', 222);
var c2 = new Conta('222', 422);
console.log(c1.sacar(200)); // retorna true, saldo c1 = 22
console.log(c1.transferir(100, c2)); // retorna false, saldo insuficiente
console.log(c2.transferir(400, c1)); // retorna true
