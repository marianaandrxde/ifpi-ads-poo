import Postagem from "./Postagem";
import PostagemAvancada from "./PostagemAvancada";
import Perfil from "./Perfil";

interface IRepositorioDePostagens {
    inserirPostagem(postagem: Postagem): void;
    consultar(id: string, texto: string, hashtag: string, perfil: Perfil): Postagem[]| null;
    consultarPorId(id: string): Postagem | null;
    todasAsPostagens(): Postagem[];
    excluirPostagem(postagem: Postagem): void;
}

class RepositorioDePostagens implements IRepositorioDePostagens {
    private _postagens: Postagem[] = [];

    constructor(postagens: Postagem[]){
        this._postagens = postagens;
    }

    get postagens(){
        return this.postagens;
    }

    inserirPostagem(postagem: Postagem): void {
        postagem.perfil.adicionarPostagem(postagem);
        this._postagens.push(postagem);
    }

    consultar(id?: string, texto?: string, hashtag?: string, perfil?: Perfil): Postagem[] | null{
        let postagensConsultadas: Postagem[] = [];

        for (let postagem of this._postagens){
            if ((id && postagem.id == id) || (texto && postagem.texto == texto) || (perfil && postagem.perfil == perfil) || (hashtag && postagem instanceof PostagemAvancada && postagem.hashtags.includes(hashtag))){
                postagensConsultadas.push(postagem);
            }
        }

        return postagensConsultadas;
    }

    consultarPorId(id: string): Postagem | null {
        for(let postagem of this._postagens){
            if (postagem.id == id){
                return postagem;
            }
        }

        return null;
    } 

    todasAsPostagens(): Postagem[] {
        return this._postagens;
    }

    excluirPostagem(postagem: Postagem): void {
        const indiceExcluir = this._postagens.findIndex(p => p.id === postagem.id);

        if (indiceExcluir !== -1) {
            this._postagens.splice(indiceExcluir, 1);
            postagem.perfil.removerPostagem(postagem);
        }
    }
}

export {IRepositorioDePostagens, RepositorioDePostagens};

