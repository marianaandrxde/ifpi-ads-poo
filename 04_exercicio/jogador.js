// 10. Crie uma classe chamada Jogador e nela: 
// • Crie 3 atributos inteiros representando força, nível e pontos atuais; 
// • Crie um construtor no qual os 3 parâmetros são passados e inicialize os  respectivos atributos; 
// • Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da  multiplicação de força pelo nível. Esse resultado é o dano de ataque do  jogador; 
// • Crie um método chamado atacar em que é passado um outro jogador  (atacado) como parâmetro. Nele e é feita a subtração do dano (método  calcularAtaque) dos pontos do atacado; 
// • Crie um método chamado estaVivo que retorna true caso o atributo pontos  do jogador seja maior que zero e falso caso contrário. 
// • Altere o método atacar para usar o método está vivo e desconsiderar a  operação, ou seja, não atacar, caso o jogador passado por parâmetro não  esteja vivo. 
// • Crie um método chamado toString() que retorna a representação textual do  produto concatenando todos os seus atributos. 
// • Avalie em com testes dois jogadores instanciados e inicializados através do  construtor. Utilize o método de ataque de cada jogador e ao final, verifique  qual jogador tem mais pontos. 
var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (jogador) {
        if (!(this.estaVivo())) {
            return;
        }
        jogador.pontosAtuais -= this.calcularAtaque();
    };
    Jogador.prototype.estaVivo = function () {
        return this.pontosAtuais > 0;
    };
    Jogador.prototype.toString = function () {
        return "STATUS DO JOGADOR\n\n        For\u00E7a = ".concat(this.forca, "\n\n        N\u00EDvel = ").concat(this.nivel, "\n\n        Pontos atuais = ").concat(this.pontosAtuais);
    };
    return Jogador;
}());
var jogador1 = new Jogador(40, 2, 100);
var jogador2 = new Jogador(50, 3, 100);
jogador1.atacar(jogador2); // subtrai 80 dos pontos atuais do jogador 2
console.log(jogador2.toString()); // exibe a situação do jogador 2 após o ataque
jogador2.atacar(jogador1); // subtrai 150 dos pontos atuais do jogador1
console.log(jogador1.estaVivo()); // retorna false, ou seja, jogador 1 está morto
console.log(jogador1.toString()); // exibe a situação do jogador 1 após o ataque
