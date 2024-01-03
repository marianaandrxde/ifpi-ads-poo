import Postagem from "./Postagem";

class Perfil {
    private _id: string;
    private _nome: string;
    private _email: string;
    private _postagens: Postagem[];

    constructor(id: string, nome: string, email: string, postagens: Postagem[]){
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._postagens = postagens;
    }

    get id(){
        return this._id;
    }

    get nome(){
        return this._nome;
    }

    get email(){
        return this._email;
    }

    get postagens(){
        return this._postagens;
    }

    adicionarPostagem(postagem: Postagem){
        this._postagens.push(postagem);
    }

    removerPostagem(postagem: Postagem): void {
        let indiceRemover = this._postagens.findIndex(p => p.id === postagem.id);

        if (indiceRemover !== -1) {
            this._postagens.splice(indiceRemover, 1);
        } 
    }
}


export default Perfil;
