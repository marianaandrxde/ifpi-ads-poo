"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
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
exports.Conta = Conta;
var Banco = /** @class */ (function () {
    function Banco(banco) {
        this.banco = [];
        this.banco = banco;
    }
    Banco.prototype.inserir = function (conta) {
        var contaBuscada = this.consultar(conta.numero);
        if (contaBuscada == null) {
            this.banco.push(conta);
        }
    };
    Banco.prototype.consultar = function (numero) {
        for (var _i = 0, _a = this.banco; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (numero == conta.numero) {
                return conta;
            }
        }
        return null;
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaBuscada = this.consultar(numero);
        return contaBuscada === null || contaBuscada === void 0 ? void 0 : contaBuscada.depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        var contaBuscada = this.consultar(numero);
        return contaBuscada === null || contaBuscada === void 0 ? void 0 : contaBuscada.sacar(valor);
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var contaCredito = this.consultar(numeroCredito);
        var contaDebito = this.consultar(numeroDebito);
        if (contaCredito !== null && contaDebito !== null) {
            return contaDebito.transferir(valor, contaCredito);
        }
    };
    Banco.prototype.quantidadeDeContas = function () {
        var contador = 0;
        for (var _i = 0, _a = this.banco; _i < _a.length; _i++) {
            var conta = _a[_i];
            contador += 1;
        }
        return contador;
    };
    Banco.prototype.totalDepositado = function () {
        var total = 0;
        for (var _i = 0, _a = this.banco; _i < _a.length; _i++) {
            var conta = _a[_i];
            total += conta.saldo;
        }
        return total;
    };
    Banco.prototype.mediaSaldo = function () {
        return this.totalDepositado() / this.quantidadeDeContas();
    };
    Banco.prototype.excluir = function (id) {
        var index = -1;
        for (var i = 0; i < this.banco.length; i++) {
            if (this.banco[i].numero == id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.banco.splice(index, 1);
        }
    };
    return Banco;
}());
exports.default = Banco;
