import Perfil from "./Perfil";

interface IRepositorioDePerfis {
    inserirPerfil(perfil: Perfil): void;
    consultar(id?: string, nome?: string, email?: string): Perfil | null;
    consultarPorId(id: string): Perfil | null;
    todosOsPerfis(): Perfil[];
}

class RepositorioDePerfis implements IRepositorioDePerfis {
    private _perfis: Perfil[] = [];

    constructor(perfis: Perfil[]){
        this._perfis = perfis;
    }

    inserirPerfil(perfil: Perfil): void {
        this._perfis.push(perfil);
    }

    consultar(id?: string | undefined, nome?: string, email?: string): Perfil | null {
        for (let perfil of this._perfis) {
            if ((id && perfil.id == id) || (nome && perfil.nome == nome )|| (email && perfil.email == email)){
                return perfil;
            }
        }

        return null;
    }

    consultarPorId(id: string): Perfil | null {
        for(let perfil of this._perfis){
            if (perfil.id == id){
                return perfil;
            }
        }

        return null;
    } 

    todosOsPerfis(): Perfil[] {
        return this._perfis;
    }
}

export {IRepositorioDePerfis, RepositorioDePerfis};