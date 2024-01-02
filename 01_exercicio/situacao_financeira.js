// 8 - Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
// valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
// entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
// atributos e exiba o resultado do método saldo().
var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira(valorCreditos, valorDebitos) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    SituacaoFinanceira.prototype.saldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var sf = new SituacaoFinanceira(27000, 7522);
console.log(sf.saldo());
