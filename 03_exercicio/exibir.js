// 6. Crie uma função exibir receba como parâmetro um “rest parameter” representando
// strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
// Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
// exibir(“a”, “b”);
// exibir(“a”, “b”, “c”);
// exibir(“a”, “b”, “c”, “d”);
function exibir() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    strings.forEach(function (str) {
        console.log(str);
    });
}
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
