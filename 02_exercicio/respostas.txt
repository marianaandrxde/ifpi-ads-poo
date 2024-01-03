1. Qual a diferença entre tipagem dinâmica e tipagem estática? 
Tipagem estática - verifica em tempo de compilação, os tipos usados em dados e variáveis, para garantir que o tipo declarado está sendo 
utilizado no código.
Tipagem dinâmica - verificação em tempo de execução, já que o tipo, não necessariamente, deve ser declarado, e pode ser inferido ao atribuir 
valor à variável.

2. Qual o principal problema do uso de tipagem dinâmica? 
A ocorrência de erros de tipo em tempo de execução. 

3. Pesquise um exemplo na internet em que a tipagem dinâmica pode ser  problemático.

let num = 5
let str = “10”
let resultado = num + str
console.log(resultado);
saída = 510

Nesse exemplo, a variável num contém o valor numérico 5, e a variável str contém a string "10". Ao realizar a operação de 
concatenação (num + str), a linguagem JavaScript tentará converter o valor numérico em uma string e, em seguida, 
concatená-las. O resultado será a string "510", pois a concatenação de "5" e "10" resulta em "510", e não na soma aritmética esperada.

4. Pesquise e exemplifique com um exemplo porque dizemos que a linguagem C,  mesmo tendo tipagem estática, possui tipagem fraca.

Embora a tipagem seja estática (os tipos são verificados em tempo de compilação), a linguagem permite operações que outras linguagens 
tipadas de maneira mais estrita restringiriam. 

#include <stdio.h>

int main() {
    int numero = 5;
    char letra = 'A';

    int resultado = numero + letra;

    printf("Resultado: %d\n", resultado);

    return 0;
}

Saída - Resultado: 74. Isso acontece porque o valor ASCII do caractere 'A' é 65 e, ao ser somado ao número 5, obtemos 70. No entanto, 
devido à tipagem fraca, o resultado final é um número inteiro, 74, em vez de gerar um erro ou um aviso sobre a incompatibilidade de tipos.

5. Pesquise e, se encontrar, um exemplo onde o tipo any seria benéfico. 
Isso é útil quando você deseja criar funções genéricas que podem lidar com diferentes tipos de entrada sem a necessidade de fazer conversões 
de tipo explícitas. 

6. Poderíamos dizer que a tipagem do TypeScript é fraca por uma variável do tipo  number aceitar tanto inteiros como ponto flutuante? 
Não. A distinção entre tipagem forte e fraca está relacionada à capacidade de uma linguagem de programação converter automaticamente 
tipos de dados em certas situações sem a necessidade de conversões explícitas. 

7. Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template  strings e os valores Ely, 120.56 e TypeScript venham de variáveis 
declaradas  separadamente e “interpoladas” na string: 

Ely 
My payment time is 120.56 
and 
my preffered language is TypeScript 

---------------------------------------

let nome = "Ely";
let valor = 120.56;
let linguagem = "TypeScript";


const mensagem = `${nome}
My payment time is ${valor}
and
my preferred language is ${linguagem}`


console.log(mensagem);
