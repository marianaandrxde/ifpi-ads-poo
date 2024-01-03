import Perfil from "./Perfil";

class Postagem {
    private _id: string;
    private _texto: string;
    private _curtidas: number;
    private _descurtidas: number;
    private _data: string;
    private _perfil: Perfil;

    constructor(id: string, texto: string, curtidas: number, descurtidas: number, data: string, perfil: Perfil){
        this._id = id;
        this._texto = texto;
        this._curtidas = curtidas;
        this._descurtidas = descurtidas;
        this._data = data;
        this._perfil = perfil;
    }

    get id(){
        return this._id;
    }
    
    get texto(){
        return this._texto;
    }

    get curtidas(){
        return this._curtidas;
    }

    get descurtidas(){
        return this._descurtidas;
    }

    get data(){
        return this._data;
    }

    get perfil(){
        return this._perfil;
    }

    curtir(){
        return this._curtidas += 1;
    }

    descurtir(){
        return this._descurtidas += 1;
    }

    ehPopular(){
        return this.curtidas > 1.5 * this.descurtidas;
    }
}

export default Postagem;