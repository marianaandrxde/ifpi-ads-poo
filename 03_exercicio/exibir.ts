// 6. Crie uma função exibir receba como parâmetro um “rest parameter” representando
// strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
// Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
// exibir(“a”, “b”);
// exibir(“a”, “b”, “c”);
// exibir(“a”, “b”, “c”, “d”);

function exibir(...strings: string[]): void {
    strings.forEach(str => {
        console.log(str);
    });
}


exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");

// Saída:
// a
// b
// a
// b
// c
// a
// b
// c
// d
