"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var banco_1 = require("./banco");
var banco_2 = require("./banco");
var b = new banco_1.default([]);
var opcao = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações' +
        '0 - Sair\n');
    opcao = readlineSync.question("Opção:");
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluir();
            break;
        case "6":
            transferir();
            break;
        case "7":
            totalizacoes();
            break;
    }
    readlineSync.question("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    var numero = readlineSync.question('Digite o número da conta:');
    var conta;
    conta = new banco_2.Conta(numero, 0);
    b.inserir(conta);
}
function consultar() {
    console.log("\nConsultar conta\n");
    var numero = readlineSync.question('Digite o número da conta:');
    var conta = b.consultar(numero);
    console.log(conta);
}
function sacar() {
    console.log("\nRealizar saque\n");
    var numero = readlineSync.question('Digite o número da conta: ');
    var valor = readlineSync.question("Valor do saque: ");
    if (b.sacar(numero, valor)) {
        console.log('Saque realizado com sucesso');
    }
    else {
        console.log('Operação interrompida! Saldo em conta insuficiente.');
    }
}
function depositar() {
    console.log("\nRealizar depósito\n");
    var numero = readlineSync.question('Digite o número da conta: ');
    var valor = readlineSync.question("Valor do dep\u00F3sito: ");
    var conta = b.consultar(numero);
    if (conta !== null) {
        b.depositar(numero, valor);
        console.log('Depósito realizado com sucesso');
    }
}
function excluir() {
    console.log("\nExcluir conta\n");
    var numero = readlineSync.question('Digite o número da conta: ');
    var conta = b.consultar(numero);
    if (conta !== null) {
        b.excluir(numero);
        console.log('Exclusão realizada com sucesso');
    }
}
function transferir() {
    console.log("\nRealizar transferência\n");
    var numeroOrigem = readlineSync.question('Número da conta origem: ');
    var numeroDestino = readlineSync.question('Número da conta destino: ');
    var valor = readlineSync.question("Valor do dep\u00F3sito: ");
    var contaOrigem = b.consultar(numeroOrigem);
    var contaDestino = b.consultar(numeroDestino);
    if (contaOrigem !== null && contaDestino !== null) {
        if (valor < contaOrigem.saldo) {
            b.transferir(numeroDestino, numeroOrigem, valor);
            console.log('Transferência realizada com sucesso');
        }
        else {
            console.log('Operação interrompida! Saldo insuficiente.');
        }
    }
}
function totalizacoes() {
    return b.totalDepositado();
}
