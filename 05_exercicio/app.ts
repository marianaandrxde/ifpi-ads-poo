import * as readlineSync from 'readline-sync';
import Banco from "./banco";
import { Conta } from './banco';

let b: Banco = new Banco([]);
let opcao: String = '';

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
        break
    case "2":
        consultar();
        break
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

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = readlineSync.question('Digite o número da conta:');
    let conta: Conta;
    conta = new Conta(numero, 0);
    b.inserir(conta);
}

function consultar(): void {
    console.log("\nConsultar conta\n");
    let numero: string = readlineSync.question('Digite o número da conta:');
    let conta = b.consultar(numero);
    console.log(conta);
}

function sacar(): void {
    console.log("\nRealizar saque\n");
    let numero : string = readlineSync.question('Digite o número da conta: ')
    let valor: number = readlineSync.question(`Valor do saque: `)
    
    if (b.sacar(numero, valor)){
        console.log('Saque realizado com sucesso')
    } else {
        console.log('Operação interrompida! Saldo em conta insuficiente.')
    }
}

function depositar(){
    console.log("\nRealizar depósito\n");
    let numero : string = readlineSync.question('Digite o número da conta: ')
    let valor: number = readlineSync.question(`Valor do depósito: `)
    let conta: Conta | null = b.consultar(numero);

    if (conta !== null){
        b.depositar(numero, valor);
        console.log('Depósito realizado com sucesso')
    }
}

function excluir(){
    console.log("\nExcluir conta\n");
    let numero : string = readlineSync.question('Digite o número da conta: ')
    let conta: Conta | null = b.consultar(numero);

    if (conta !== null){
        b.excluir(numero);
        console.log('Exclusão realizada com sucesso')
    }
}

function transferir(){
    console.log("\nRealizar transferência\n");
    let numeroOrigem : string = readlineSync.question('Número da conta origem: ')
    let numeroDestino : string = readlineSync.question('Número da conta destino: ')
    let valor: number = readlineSync.question(`Valor do depósito: `)
    let contaOrigem: Conta | null = b.consultar(numeroOrigem);
    let contaDestino: Conta | null = b.consultar(numeroDestino);

    if (contaOrigem !== null && contaDestino !== null){
        if (valor < contaOrigem.saldo){
            b.transferir(numeroDestino, numeroOrigem, valor);
            console.log('Transferência realizada com sucesso');
        } else {
            console.log('Operação interrompida! Saldo insuficiente.')
        }
    }
}

function totalizacoes(){
    console.log(`TOTAL DEPOSITADO: ${b.totalDepositado()}`);
}
