// a. Crie uma classe Postagem e nela:
// a. Crie os atributos:
// 1. id do tipo number, representando o identificador da
// postagem;
// 2. texto do tipo string, representando um texto da postagem;
// 3. quantidadeCurtidas do tipo number;
// b. Crie um método chamado curtir que incrementa a quantidade
// curtidas;
// c. Crie um método chamado toString que retorna a concatenação da
// postagem com a quantidade de curtidas;

class Postagem {
    id: number;
    texto: string;
    qtdCurtidas: number;

    constructor(id: number, texto: string, qtdCurtidas: number) {
        this.id = id;
        this.texto = texto;
        this.qtdCurtidas = qtdCurtidas;
    }

    curtir(): void {
        this.qtdCurtidas += 1;
    }

    toString(): string {
        return `ID DA POSTAGEM: ${this.id}\nTEXTO DA POSTAGEM: ${this.texto}\nQUANTIDADE DE CURTIDAS: ${this.qtdCurtidas}`
    }
}

// b. Crie uma classe Microblog e nela:
// a. Crie um array de classes Postagem;
// b. Crie um método que inclua uma postagem passada como
// parâmetro no array de postagens;
// c. Crie um método de excluir uma postagem que recebe um id
// passado por parâmetro. Para isso, efetue uma busca pelo id nas
// postagens do array e faça a exclusão de forma análoga à feita na
// classe Banco;
// d. Crie um método que retorna a postagem mais curtida;
// e. Crie um método curtir em que se passa um id como parâmetro e a
// classe microblog pesquisa a postagem e chama seu método curtir
// da própria postagem;
// f. Crie um método toString que retorna a concatenação do “toString”
// de todas as postagens.

class Microblog {
    microblog: Postagem[] = [];

    constructor(microblog: Postagem[]){
        this.microblog = microblog;
    }

    incluir(postagem: Postagem){
        this.microblog.push(postagem);
    }

    excluir(id: number) {
        let index = -1;

        for (let i = 0; i < this.microblog.length; i++) {
            if (this.microblog[i].id == id) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            this.microblog.splice(index, 1);
        }
    }

    buscar(id: number){
        for (let postagem of this.microblog){
            if (id == postagem.id){
                return postagem;
            }
        }

        return null;
    }

    curtir(id: number): void{
        let postagemBuscada = this.buscar(id);

        if (postagemBuscada !== null){
            postagemBuscada.curtir();
        }
    }

    postagemMaisCurtida(): Postagem | undefined{
        let maior = 0;
        let postagemBuscada: Postagem | undefined;

        for (let postagem of this.microblog){
            if (postagem.qtdCurtidas > maior){
                postagemBuscada = postagem;
                maior = postagem.qtdCurtidas;
            }
        }

        return postagemBuscada;
    }

    toString(): string {
        let postagensConcatenadas: string = ``;

        for (let postagem of this.microblog){
            postagensConcatenadas = postagensConcatenadas + `POSTAGEM ${postagem.id}\n LEGENDA ${postagem.texto}\n QUANTIDADE DE CURTIDAS ${postagem.qtdCurtidas}\n`;    
        }

        return postagensConcatenadas;
    }
}