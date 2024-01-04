// 6. Crie uma classe chamada Saudacao que: 
// • Contenha um atributo chamado texto e outro chamado destinatario, ambos  String; 
// • Crie um construtor que inicializa os dois atributos; 
// • Crie um método obterSaudacao() que retorne a concatenação dos dois  atributos. Ex: "Bom dia, João"; 
// • Instancie uma classe Saudacao e teste seu método obterSaudacao(). 

class Saudacao {
    texto: string;
    destinatario: string;
 
    constructor(texto: string, destinatario: string) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
 
    obterSaudacao(){
        return `${this.texto}, ${this.destinatario}`;
    }
}
 
let texto = "Olá";
let destinatario = "Mariana";
 
let saudacao = new Saudacao(texto, destinatario);
console.log(saudacao.obterSaudacao());
 