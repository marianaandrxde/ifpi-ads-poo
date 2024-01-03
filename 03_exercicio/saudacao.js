// Crie uma função que receba como parâmetros um nome e um pronome de
// tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
// valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.
function saudacao(nome, pronome) {
    if (pronome === void 0) { pronome = 'Sr'; }
    return "".concat(pronome, ". ").concat(nome);
}
console.log(saudacao('Mariana', 'Srta'));
console.log(saudacao('Paulo'));
