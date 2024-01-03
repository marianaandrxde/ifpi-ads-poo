import Perfil from "./Perfil";
import Postagem from "./Postagem";

class PostagemAvancada extends Postagem{
    private _hashtags: string[] = [];
    private _visualizacoesRestantes: number = 10;

    constructor(id: string, texto: string, curtidas: number, descurtidas: number, data: string, perfil: Perfil, hashtags: string[], visualizacoesRestantes: number){
        super(id, texto, curtidas, descurtidas, data, perfil);
        this._hashtags = hashtags;
        this._visualizacoesRestantes = visualizacoesRestantes;
    }

    get hashtags() {
        return this._hashtags;
    }

    get visualizacoesRestantes(){
        return this._visualizacoesRestantes;
    }

    adicionarHashtag(hashtag: string) {
        this._hashtags.push(hashtag);
    }

    existeHashtag(hashtag: string): boolean {
        for(let item of this._hashtags){
            if (item == hashtag){
                return true;
            }
        }

        return false;
    }

    decrementarVisualizacoes(): void {
        this._visualizacoesRestantes--;
    }
}

export default PostagemAvancada;